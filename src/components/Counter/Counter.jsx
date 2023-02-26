import React from "react";
import { Button } from "../Button/Button";

export const Counter = ({ value, min, max, onChange}) => {
    
    return (
        <div>
            <Button onClick={() => onChange(value - 1)} disabled={(value <= min)}>-</Button>
            {value}
            <Button onClick={() => onChange(value + 1)} disabled={value >= max}>+</Button>
        </div>
    )
}