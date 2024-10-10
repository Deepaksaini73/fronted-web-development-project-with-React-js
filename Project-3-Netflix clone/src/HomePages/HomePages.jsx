import React, { useState } from 'react';
import Homes from '../components/homes/Homes';
import Upcoming from '../components/upcoming/Upcoming';
import Trading from '../components/trading/Trading';
import {upcome,latest,recommended} from '../demoData';

function HomePages() {
  const [items,setItems]=useState(upcome);
  const [item,setItem]=useState(latest);
  const [rec,setrec]=useState(latest);
  return (
    <>
    <Homes/>
    <Upcoming items={items} Tittle='Upcoming Movies' />
    <Upcoming items={item} Tittle='Latest Movies' />
    <Trading/>
    <Upcoming items={rec} Tittle='Recommended Movies'  />

    </>
  )
}

export default HomePages;