import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import { Link } from  'react-router-dom'

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#about">About</a></p>
    <p><a href="#services">Offerings</a></p>
    <p><a href="#contact">Contact</a></p>
  </>
)

const Navbar = () => {
  const [ toggleMenu, setToggleMenu ] = useState(false);
  return (
    <div className='pisence__navbar'>
      <div className="pisence__navbar-links">
        <div className="pisence__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="pisence__navbar-links_container">
          <Menu/>
        </div>
      </div>
      <div className="pisence__navbar-menu">
        {
          toggleMenu
            ? <RiCloseLine color='#fff' size={30} onClick={() => setToggleMenu(false)}/>
            : <RiMenu3Line color='#fff' size={30} onClick={() => setToggleMenu(true)}/>
        }
        {
          toggleMenu && (
            <div className='pisence__navbar-menu_container scale-up-center'>
              <div className="pisence__navbar-menu_container-links">
                <Menu />
              </div>
            </div>
          )
        }
      </div>
    </div>   
  )
}

export default Navbar