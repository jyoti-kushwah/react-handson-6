import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='con'>
    <Link to='/'>Home</Link>
    <Link to='/Student'>Student</Link>
    <Link to='/Contact'>Contact</Link>
    </div>
  )
}

export default Nav
