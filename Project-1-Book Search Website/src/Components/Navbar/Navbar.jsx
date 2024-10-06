import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/Book-Logo-PNG-Pic.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  let location = useLocation();

  return (
    <nav className='navbar' id="navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to="/" className='navbar-brand flex'>
            <img src={logoImg} alt="site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>bookhub</span>
          </Link>
          <button type="button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size={35} style={{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className="navbar-nav">
            <li className='nav-item'>
              <Link to="/" className={`nav-link text-uppercase ${location.pathname === '/' ? 'text-black' : 'text-white'} fs-22 fw-6 ls-1`} >Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="/about" className={`nav-link text-uppercase ${location.pathname === '/about' ? 'text-black' : 'text-white'} fs-22 fw-6 ls-1`}>About</Link>
            </li>
            <li className='nav-item'>
              <Link to="/premium-books" className={`nav-link text-uppercase ${location.pathname === '/premium-books' ? 'text-black' : 'text-white'} fs-22 fw-6 ls-1`}>Latest Books</Link>
            </li>
            <li className='nav-item'>
              <Link to="/own-publish" className={`nav-link text-uppercase ${location.pathname === '/own-publish ' ? 'text-black' : 'text-white'} fs-22 fw-6 ls-1`}>Own Publish</Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar