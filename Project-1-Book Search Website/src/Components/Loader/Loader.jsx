 import React from 'react';
 import LoadingImg from '../../images/loader.gif';
 import '../Loader/Loader.css'

 const Loader=()=>{
    return (
        <div className='loader flex flex-c'>
            <img src={LoadingImg} alt="loader" />
        </div>
    )
 }
 export default Loader;
