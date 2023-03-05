import React, { useState } from 'react';
import classNames from "classnames";
import styles from "./styles.module.css";
import { Star } from '../Star/Star';

const defaultStarCount = [...Array(5).keys()].map(x => x + 1);

export const Rating = ({value, size, onChange, margin}) => {
    const [stars] = useState(defaultStarCount);

    return (
        <div className={classNames(styles.root, styles[margin])}>
            {
                stars.map((star,id) => {
                    if(id < value){
                        return <Star value={star} setRating={onChange} type={"gold"} size={size}/>
                    }else{
                        return <Star value={star} setRating={onChange} type={"grey"} size={size}/> 
                    }
                })
            }
        </div>
    )
}
