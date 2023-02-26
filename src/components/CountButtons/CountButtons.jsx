import React from 'react'
import { Button } from '../Button/Button';
import { MAX_COUNT, MIN_COUNT } from '../../constants/minmax';
import { increaseCount,  decreaseCount} from "../../utils/setCount";

export const CountButtons = ({count, setCount}) => {
  return (
    <div>
        <Button children="-" onClick={()=>decreaseCount(count, setCount)} disabled={count === MIN_COUNT}/>
            <span>{count}</span>
        <Button children="+" onClick={()=>increaseCount(count, setCount)} disabled={count === MAX_COUNT}/>
    </div>
  )
}
