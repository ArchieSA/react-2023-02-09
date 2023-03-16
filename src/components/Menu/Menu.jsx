import React from "react";
import { useSelector } from "react-redux";
import { selectRestaurantMenuById } from "../../store/entities/restaurant/selectors";
import { Dish } from "../Dish/Dish";

export const Menu = ({ restaurantId }) => {
  const menu = useSelector((state) =>
    selectRestaurantMenuById(state, { restaurantId })
  );

  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {menu.map((dishId) => (
          <li>
            <Dish dishId={dishId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
