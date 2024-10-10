import React,{useState} from 'react';
import { HomeData } from '../../demoData';
import  Home  from './Home';
import './home.css';

function Homes() {
    const [items,setItems]=useState(HomeData);
  return (
    <>
    <section className='home'>
        <Home items={items} />
        </section>
    </>
  ) 
}

export default Homes;