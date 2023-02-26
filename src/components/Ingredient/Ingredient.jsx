import React, { useState } from 'react';
import { CountButtons } from '../CountButtons/CountButtons';

export const Ingredient = ({ingredient}) => {
    let [count, setCount] = useState(1);

  return (
    <>
    <div>
        {
            !!ingredient && <li>{ingredient}</li>
        }
    </div>
    <CountButtons count={count} setCount={setCount}/>
</>
    )
}
