import { Link } from "react-router-dom";
import { Dish } from "../Dish/Dish";
import { useSelector } from "react-redux";
import { selectRestaurantByDishId } from "../../store/entities/restaurant/selectors";
import style from "./DishLink.module.css";
import classnames from "classnames";
export const DishLink = ({ dishId, className }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantByDishId(state, { dishId })
  );
  if (!restaurant) {
    return null;
  }

  const { id, name } = restaurant;
  return (
    <div className={classnames(style.root, className)}>
      <Link to={dishId}>
        <Dish dishId={dishId} />
      </Link>
      <span className={style.restaurant}>
        ({<Link to={`/restaurants/${id}`}>{name}</Link>})
      </span>
    </div>
  );
};
