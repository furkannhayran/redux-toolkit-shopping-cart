import React from 'react'
import NavbarLeft from './navbarItem/NavbarLeft'
import NavbarRight from './navbarItem/NavbarRight'
import '../../css/navbar.scss'
function Navbar() {
  return (
    <div className='navbar-container'>
        <NavbarLeft/>
        <NavbarRight/>
    </div>
  )
}

export default Navbar