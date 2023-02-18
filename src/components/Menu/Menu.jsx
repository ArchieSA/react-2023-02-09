import React from "react";

export const Menu = ({ menuItem }) => {
  console.log(menuItem, "menuItem");
  const { id, name, price, ingredients } = menuItem;

  return (
    <div key={id}>
      <h3> Название блюда: {name}</h3>
      <p> Цена блюда: {price}$</p>
      <p>
        Состав :
        {ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
        <hr />
      </p>
    </div>
  );
};
