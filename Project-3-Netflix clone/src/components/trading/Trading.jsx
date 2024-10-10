import React, { useState } from 'react';
import Home from '../homes/Home';
import {trending} from '../../demoData';
import './treding.css';

function Trading() {
    const [items,setItems]=useState(trending);
  return (
    <>
    <section className='trending text-white'>
            <Home items={items}/>  
    </section>
    </>
  )
}

export default Trading;