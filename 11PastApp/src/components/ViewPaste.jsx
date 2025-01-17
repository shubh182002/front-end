import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast';

function ViewPaste() {
    const { id } = useParams();  // Get the pasteId from the URL params

    // Correct the typo: change 'stete' to 'state'
    const allPastes = useSelector((state) => state.paste.pastes); // Get pastes from Redux store

    // Find the paste by id
    const paste = allPastes.find((p) => String(p.id) === String(id));  // Use find to get the first match


    if (!paste) {
        return <p>Paste not found</p>;  // Show message if paste is not found
    }

    return (
        <div className=''>
            <h1 className='mt-5 p-5  '>{paste.title}</h1>
            <button className='flex  ' onClick={() => {
                navigator.clipboard.writeText(paste?.content)
                toast.success("Copied to clipboard")
            }}>Copy</button>
            <textarea
                className=' mt-5 h-[500px] w-[500px] p-5 rounded-lg'
                disabled
                value={paste.content} // Display paste content
            />
        </div>
    );
}

export default ViewPaste;
