import React from 'react';
import { Link } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



 const Home = ({items})=> {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
    <div className="homeContainer">
      <Slider {...settings}>
      {
        items.map((item)=>(     
          <div className='box' key={item.id}>
            <div className='coverImage'>
              <img src={item.cover} alt='' />
            </div>
            <div className='content flex'>
              <div className='details '>
                <h1 className='text-white'>{item.name}</h1>
                <div className='rating '>
                  <div className='rate '>
                    <i className='fas fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star-half'></i>
                  </div>
                  <label>{item.rating}(Imdb)</label>
                  <span>GP</span>
                  <label>{item.time}</label>
                </div>
                <p>{item.desc}</p>
                <div className='cast'>
                  <h4>
                    <span>Starring </span>
                    {item.starring}
                  </h4>
                  <h4>
                    <span>Genres </span>
                    {item.genres}
                  </h4>
                  <h4>
                    <span>Tags </span>
                    {item.tags}
                  </h4>
                </div>
                <button className='primary-btn'>
                <Link to={`/singlepage/${item.id}`} className='text-white'><i className='fas fa-play'></i> PLAY NOW </Link>
                </button>
              </div>
              <div className='palyButton row'>
                <Link to={`/singlepage/${item.id}`}>
                  <button>
                    <div className='img'>
                      <img src='./images/play-button.png' alt='play-btn' />
                      <img src='./images/play.png' className='change' />
                    </div>
                    WATCH TRAILER
                  </button>
                </Link>
              </div>
            </div>
          </div>
        
        ))
      }
      </Slider>
    </div>
    </>
  )
}

export default Home;