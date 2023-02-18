import React from "react";

export const Menu = ({data}) => {

  const getView = ({name,price,ingredients }) => `${name}  -  ${price}$
  Состав: ${ingredients.join()}
  
  `
  const menu = data.map(el => getView(el))

  return (
    <div>
        <h3>Menu</h3>
        <div style={{whiteSpace: 'pre-line'}}>{menu}</div>
    </div>

  )
};
