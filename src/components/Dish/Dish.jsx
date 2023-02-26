import React, { useState } from 'react';
import { Ingredients } from '../Ingredients/Ingredients';
import { CountButtons } from '../CountButtons/CountButtons';

export const Dish = ({dish}) => {
    let [count, setCount] = useState(0);
    const {name, price, ingredients} = dish;

    return (
        <>        
            <h2>{name}</h2>
            <h3>{`Price: ${price}$`}</h3>
            {
                count > 0 ?
                    <Ingredients ingredients={ingredients}/>
                : null
            }
            <CountButtons count={count} setCount={setCount}/>
        </>

    )
}
