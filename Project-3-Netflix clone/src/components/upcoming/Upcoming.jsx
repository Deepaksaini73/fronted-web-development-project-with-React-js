import React from 'react';
import { Link } from 'react-router-dom';
import Upcard from './Upcard';
import './Upcoming.css';

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Upcoming = ({items,Tittle})=> {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      }
  return (
    <>
    <section className='upcoming'>
        <div className="upcoming-container">
            <div className='heading flex flex-sb'>
                <h1>{Tittle}</h1>
                <Link to='/'>View All</Link>
            </div>
            <div className="content">
            <Slider {...settings}>
                {
                    items.map((item)=>(
                        <Upcard key={item.id} item={item}></Upcard>
                    ))
                }
                </Slider>
            </div>
        </div>
    </section>
    </>
  ) 
}

export default Upcoming