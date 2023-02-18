import React from "react";
import { Menu } from "../Menu/Menu";
import {Reviews} from "../Reviews/Reviews"

export const Restaurant = ({restaurant}) => {
  const {name,menu,reviews}=restaurant
  return (
  <div>
    <div>
      <h2>{name}</h2>
      <Menu data={menu}/> 
      <Reviews data={reviews}/>
    </div>
  </div>
  );
};

