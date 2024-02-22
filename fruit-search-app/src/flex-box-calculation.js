
import React, { useState } from 'react';


function Flexbox({image, fruitname,price}) {
    const [numberInput, setNumberInput] = useState('');

    const handleInputChange = (e)=>{
        setNumberInput(e.target.value);

    };
    return (
            <div className='cardWrapper'>
                <img className='image' src={image} alt={fruitname}/>
                <div className='details'>
                    <p>{fruitname}</p>
                    <p className='rate'>{price}</p>
                </div>
                <div className="rateBox">
                <input type="number"
                min="1" 
                max="100" 
                className="rateIncDec" 
                value={numberInput} onChange={handleInputChange}/>
                <button className="plusButton">+</button>
                </div>
                <div className='calc'>
                   Today's food cal  {numberInput} 
                   <p>
                    {numberInput} 
                    {fruitname} = {parseInt(price) * parseInt(numberInput)}

                </p>
                </div>

            </div>

       
    );
}

export default Flexbox;
