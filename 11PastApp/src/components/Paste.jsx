import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeToPastes } from '../redux/pastSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

function Paste() {
    const pastes = useSelector((state) => state.paste.pastes);
    console.log(pastes); // For debugging

    const [seachTerm, setSearchTerm] = useState('')

    const dispatch = useDispatch()

    const filteredData = pastes.filter(
        (paste) => paste.title.toLowerCase()
        .includes(seachTerm.toLowerCase())
    )

    const handleDelete = (pasteId) => {
        dispatch(removeToPastes(pasteId))
    }

    return (
        <div className='w-full'>
            <input
            type="search"
            placeholder='Search here' 
            value={seachTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='p-2 mt-10 w-[500px] rounded-lg'
            />
            <div className='flex flex-col gap-5 mt-10'>
                {
                  filteredData.length > 0 && 
                  filteredData.map((paste) =>
                    {
                        return(
                            <div className='border p-5 ' key={paste.id} >
                               <div>
                               {
                                    paste.title
                                }
                               </div>
                               <div>
                                {paste.content}
                               </div>
                               <div className='flex flex-row gap-2 place-content-evenly'>
                                 <button>
                                 <Link to={`/?pasteId=${paste?.id}`}>Edit</Link> 
                                </button>
                                 <button >
                                   
                                 <Link to={`/pastes/${paste.id}`}>View</Link>


                                </button>
                                 <button onClick={ () => handleDelete(paste?.id)}>
                                    Delete
                                </button>
                                 <button onClick={() => {
                                    navigator.clipboard.writeText(paste?.content)
                                    toast.success("Copied to clipboard")
                                 }}>
                                    Copy
                                </button>
                                 <button>
                                    Share
                                </button>
                               </div>
                               
                            </div>
                        )
                    } 
                 
                )}
            </div>
        </div>

    );
}

export default Paste;
