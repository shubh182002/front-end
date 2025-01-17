import React, { useEffect, useState} from 'react'
import { useSearchParams } from 'react-router-dom'
import {useDispatch, useSelector,} from 'react-redux'
import { addToPastes, updateToPaste } from '../redux/pastSlice'
import toast from 'react-hot-toast';

function Home() {
    const [title, setTitle] = useState("")
    const [value, setValue] = useState("")
    const [searchParems, setSearchParams] = useSearchParams()
    const pasteId = searchParems.get("pasteId")
    const dispatch = useDispatch()
    const allPastes = useSelector((state) => state.paste.pastes)

    useEffect(() => {
        if (pasteId) {
            // Ensure both pasteId and p.id are strings for comparison
            const paste = allPastes.find((p) => String(p.id) === String(pasteId));
            if (paste) {
                setTitle(paste.title);
                setValue(paste.content);
            } else {
                console.log("Paste not found");
            }
        }
    }, [pasteId, allPastes]);
    
    const createNewPaste = () => {
            const paste = {
                title:title,
                content: value,
                id: pasteId || Date.now().toString(36),createdAt:new Date().toISOString()

            }
            
            

            if(pasteId){
                // update paste
                dispatch(updateToPaste(paste))
                toast.success('Paste Updated Successfully');
            }else{
                // create paste
                dispatch(addToPastes(paste))

            }

            // after creatiton or updatetion 
            setTitle('')
            setValue('')
            setSearchParams('')


    }
    return (
        <div>
            <div className='flex flex-wrap place-content-between w-full gap-5 mt-10'>
                <input
                    type="text"
                    placeholder='Enter title here'
                    className='px-5 rounded-lg  w-[65%]'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <button 
                onClick={createNewPaste}
                className='p-2  rounded-lg  gap-5  w-[30%] '>
                    {
                        pasteId ? "Update Paste" : "Create New Paste"
                    }
                </button>
            </div>
            <div>
                    <textarea
                     name="" 
                     id=""
                     value={value}
                     placeholder='Enter Content here'
                     onChange={(e) => setValue(e.target.value) }
                     className='w-[500px] h-[500px] p-5 mt-5 float-start rounded-lg'>

                    </textarea>
            </div>
        </div>
    )
}

export default Home
