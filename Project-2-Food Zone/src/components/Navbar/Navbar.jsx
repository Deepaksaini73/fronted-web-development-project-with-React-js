import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar({ setSearchTerm ,setTypeFilter }) {

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
      };

    
  return (
    <nav className='navbar'>
        <div className="container navbar-content flex flex-c">
            <div className="brand-logo">
                <Link to='/'>
                <h2 className='text-white'>F<span className='red'>oo</span>dy  Z<span className='red'>o</span>ne</h2>
                </Link>
            </div>
            <div className="nav-links flex">
                <ul className='nav-link-item-list flex flex-sb flec-c'>
                    
                    <li className='nav-link-item'onClick={() => setTypeFilter('')}>All</li>
                    <li className='nav-link-item'onClick={() => setTypeFilter('breakfast')}>Breakfast</li>
                    <li className='nav-link-item'onClick={() => setTypeFilter('lunch')}>Lunch</li>
                    <li className='nav-link-item'onClick={() => setTypeFilter('snack')}>Snack</li>
                    <li className='nav-link-item' onClick={() => setTypeFilter('Dinner')}>Dinner</li>
                </ul>
            </div>
            <div className="search text-white">
                <input type="text" placeholder='Search Food ....' onChange={handleSearch}  />
            </div>
        </div>
    </nav>
  )
}

export default Navbar