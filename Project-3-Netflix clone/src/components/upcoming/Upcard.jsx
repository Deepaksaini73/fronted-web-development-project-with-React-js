import React from 'react';
import './Upcoming.css';
import { Link } from 'react-router-dom';

function Upcard({ item: { id, cover, name, time } }) {
    return (
        <>
            <div className="MovieBox">
                <div className="img">
                    <img src={cover} alt="" />
                </div>
                <div className="text">
                    <h3>{name}</h3>
                    <span>{time}</span>
                    <br />
                    <button className='primary-btn'>
                        <Link to={`/singlepage/${id}`} className='text-white'><i className="fa fa-play"></i>PLAY NOW</Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Upcard