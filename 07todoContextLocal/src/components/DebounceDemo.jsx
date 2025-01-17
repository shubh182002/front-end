import { useState, useRef } from "react"


export function DebounceDemo()
{
    const [msg, setMsg] = useState('');
    let  task = useRef(null);

    function Tip1(){
        setMsg('Tip-1 : Always define component name with Uppercase letter');
    }

    function Tip2(){
        setMsg('Tip-2 : Components must use JSX as language');
    }

    function Tip3(){
        setMsg('Tip-3 : Every JSX element must have end token');
    }
   
    function handleShowClick(){
         setTimeout(Tip1, 3000);
         task.current = setTimeout(Tip2, 6000);
         setTimeout(Tip3, 10000);
    }
    function handleCancelClick(){
        clearTimeout(task.current);
    }

    return(
        <div className="container">
            <div className="text-center">
            <button onClick={handleShowClick}>Show Tips</button>
            <button onClick={handleCancelClick}>Cancel Tip2</button>
            <h3>{msg}</h3>
            </div>
        </div>
    )
}