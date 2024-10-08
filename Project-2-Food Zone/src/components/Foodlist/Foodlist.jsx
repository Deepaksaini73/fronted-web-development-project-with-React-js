import React, { useState,useEffect } from 'react';
import MenuData from './a';
import './Foodlist.css';


function Foodlist({ searchTerm ,typeFilter}) {
    const [food,setFood]=useState([]);
    useEffect(() => {
        setFood(MenuData);  
      }, []);

      const filteredFood = food.filter(item => {
        
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    
       
        const matchesType = item.type.toLowerCase().includes(typeFilter.toLowerCase());
    
        
        return matchesSearch && matchesType;
      });
    

    return (
        <section className='foodlist'>
            <div className="container">
                <div className='foodlist-content grid'>

                    <ul className='foodlist-item-list'>
                        {filteredFood.map((item, index) => (
                            <li className='foodlist-item flex ' key={index}>
                                <div className="food-image">
                                <img  src={item.image} alt={item.name} />
                                </div>
                                <div className="foodlist-item-info flex flex-column">
                                <h2 className='fs-18'>{item.name}</h2>
                                <p className='foodlist-item-text'>{item.text}</p>
                                <p className='foodlist-item-text type'>Type : {item.type}</p>
                                <p className='price'>₹ {item.price}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default Foodlist