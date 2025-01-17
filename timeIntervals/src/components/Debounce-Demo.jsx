import { useState, useRef, useEffect } from "react"


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
    function Tip4(){
        setMsg('Tip-5 : Every JSX element must have end token');
    }
   
    function handleShowClick(){
         setInterval(Tip1, 1000);
        setInterval(Tip2,5000)
        
        task.current = setInterval(Tip4,1000)
         
         
    }
    function handleCancelClick(){
        clearTimeout(task.current);
    }
    useEffect(() => {
     Tip1()
     Tip2()
     Tip3()
     Tip4()
    },[])

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