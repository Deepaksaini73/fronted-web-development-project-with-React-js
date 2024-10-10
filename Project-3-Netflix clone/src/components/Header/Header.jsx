import React ,{ useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../images/logo.png'
import './Header.css';

function Header() {

    const [mobile,setMobile]=useState(false);
    
  return (
    <header>
        <div className="container flex flex-sb">
            <nav className='flex flex-sb flex-c'>
                <div className="logo">
                    <img src={logoImg} alt="" />
                </div>
                <ul className={mobile?"nav-links text-white":"flex flex-sb flex-c text-white"} onClick={()=>{setMobile(false)}}>
                    <Link to='/'>Home</Link>
                    <Link to='/series'>Series</Link>
                    <Link to='/movies'>Movies</Link>
                    <Link to='/pages'>Pages</Link>
                    <Link to='/pricing'>Pricing</Link>
                    <Link to='/contact'>Contact</Link>
                </ul>

                <button className='toggle text-white' onClick={()=>{setMobile(!mobile)}}>
                    {mobile? <i className='fa fa-times'></i> :<i className='fa fa-bars'></i>}
                </button>
            </nav>
            <div className="account flex flex-sb flex-c text-white">
                <i className='fa fa-search'></i>
                <i className='fa fa-bell'></i>
                <i className='fa fa-user'></i>
                <button className='subscribe-btn'>Subscribe</button>
            </div>
        </div>
    </header>
  )
}

export default Header;