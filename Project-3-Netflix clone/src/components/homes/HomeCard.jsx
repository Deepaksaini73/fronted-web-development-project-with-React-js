import React from 'react';

 const  HomeCard=({item})=> {
  return (
    <>
    <div className="box">
        <div className="coverImage">
            <img src={item.cover} alt="coverImage" />
        </div>
        <div className="content flex">
            <h1 className='text-white'>item.name</h1>
    
        </div>
    </div>
    </>
  )
}
export default HomeCard;

