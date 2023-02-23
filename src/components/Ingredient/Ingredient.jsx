import React, { useState } from 'react';
import { Amount } from "../Amount/Amount";
import { getValueInRange } from "../../utils/getValueInRange";


export const Ingredient = ({ text })=> {
    const [count, setCount] = useState(1)
    const onChange = (value) => setCount(getValueInRange(value))
    return (
        <div>
            <i>{text} </i>
            <Amount value={count} setCount={onChange}/>
        </div>
    );
}
