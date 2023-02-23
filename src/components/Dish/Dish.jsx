import React, {useState} from 'react';
import { Amount } from "../Amount/Amount";
import { Ingredient } from "../Ingredient/Ingredient";
import { getValueInRange } from "../../utils/getValueInRange";



export const Dish = ({ item })=> {
    const [count, setCount] = useState(1)
    const onChange = (value) => setCount(getValueInRange(value))
    return (
        <div>
            <b>{item.name} </b>
            <Amount value={count} setCount={onChange}/>
            <ol>
             { !!item.ingredients &&
                 item.ingredients.map(ingredient =>
                 <li><Ingredient text={ingredient}/></li>)
             }
            </ol>
        </div>
    );
}
