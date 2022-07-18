import React from 'react'
import './Navbar.scss'
import Logo from './Logo/Logo'
import HBGMenu from './HBGMenu/HBGmenu'
import MenuLink from './MenuLink/MenuLink'

function Navbar() {
  return (
    <div className='container-fuid'>
        <div className='Navbar_warpper'>
            <Logo />
            <HBGMenu />
            <MenuLink />
        </div>
    </div>
  )
}

export default Navbar