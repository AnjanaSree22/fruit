
import React from 'react';
import Flexbox from './flex-box-calculation';
import appleImg from './assets/appleimg.jpg';
import bananaImg from './assets/bananaImg.jpg';
import datesImg from './assets/datesImg.jpg';
import grapesImg from './assets/grapesImg.jpg'
import {useState} from 'react';
import './App.css';
function Main(){
    const[isClicked, setISClicked] = useState(false);
    const [searchText, setSearchText] = useState('');
   

    const handleClick = ()=>{
        setISClicked(true);
    };

    const fruits = [
        { name: 'Apple', img:appleImg, rate:'81' },
        { name: 'Banana', img:bananaImg, rate:'159' },
        { name: 'Dates', img:datesImg, rate:'228' },
        { name: 'Grapes', img:grapesImg, rate:'200'}
    ];

    const filteredFruits = fruits.filter(fruit=>fruit.name.toLowerCase().includes(searchText.toLowerCase()));

    return(
        <div className='body'>
        <p className='searchName'>Search</p>
        <input 
        type='text' 
        placeholder='Find a food' 
        onClick={handleClick}
        className={isClicked? 'text-box clicked':'text-box'}
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        
        />
        <div className='container'>
            {filteredFruits.map((data,index)=><Flexbox key={index} fruitname= {data.name} image={data.img} price={data.rate}/>)}
        </div>

        <div className='calc'>
            
            
        </div>
        
        </div>
        

        


    );

}

export default Main;


