import React,{useState} from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import Foodlist from '../Foodlist/Foodlist';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  return (
    <div className="holder">
        <header>
            <Navbar setSearchTerm={setSearchTerm} setTypeFilter={setTypeFilter} />
            <div className="header-content flex text-white">
                <h2 className="fw-7 fs-22">Your Search Result</h2>
                <Foodlist searchTerm={searchTerm} typeFilter={typeFilter}/>
            </div>
        </header>
    </div>
  )
}

export default Header;