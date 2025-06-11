import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Menu.css'


const Menu = () => {
  return (
    <>
        <div className='box'>
          <nav1>
            <Link to={'/'} className='anchor'>Home</Link>
            <Link to={"/about"} className='anchor'>About</Link>
            <Link to={'/contact'} className='anchor'>Contact</Link>
            <Link to={"/services"} className='anchor'>Services</Link>
          </nav1>
        </div>
    </>
  )
}

export default Menu