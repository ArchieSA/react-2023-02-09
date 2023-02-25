import React from "react";

<<<<<<< HEAD
// export const Menu = ({menu}) => {
//   const restaurantDishes = menu.map(({ name }) => name).join(" ,");
//   return <div>{restaurantDishes}</div>
// };
export const Menu = ({menu}) => {
  const restaurantDishes = menu.map(({ name }) => name).join(" ,");
  // return <div>{restaurantDishes}</div>;
  return React.createElement('div', {}, restaurantDishes);
};
=======
export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {menu.map(({ name }) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
};
>>>>>>> fd4cf4975a9c3ae426087720930fbe5c1454130a
