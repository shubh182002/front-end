import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContex'


const Login = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})

    }
  return (
    <div>
       <h2>Login</h2>
       <br />
       <input type="text"
        placeholder='username'
        onChange={(e) =>setUsername(e.target.value) }
         />
        <br />
        <br />
       <input type="password"
        name="" id=""
        onChange={ (e) => setPassword(e.target.value)}
         />
         <br />
         <br />
       <button onClick={handleSubmit}>Submit</button>
       <br />
    </div>
  )
}

export default Login
