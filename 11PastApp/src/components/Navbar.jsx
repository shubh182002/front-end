import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'

function navbar() {
  return (
    <div className='flex flex-row gap-5 place-content-center'>
       <NavLink
        to="/">
            Home
       </NavLink>

       <NavLink
       to="/pastes">
         Pastes
       </NavLink>
    </div>
  )
}

export default navbar
