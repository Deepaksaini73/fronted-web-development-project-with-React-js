import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/Searchform";
import "./Header.css";


const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Discover a world of books at your fingertips. Whether you’re searching for the latest bestsellers, timeless classics, or rare finds, our comprehensive search engine connects you to millions of titles from around the globe. Start your literary adventure today!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header