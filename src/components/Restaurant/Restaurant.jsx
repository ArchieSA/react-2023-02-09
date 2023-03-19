import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantById } from "../../store/entities/restaurant/selectors";
import { selectIsReviewLoading } from "../../store/entities/review/selectors";
import { loadReviewsIfNotExist } from "../../store/entities/review/thunks/loadReviewsIfNotExist";
import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";

export const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { restaurantId })
  );
  
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsReviewLoading);

  useEffect(() => {
    dispatch(loadReviewsIfNotExist(restaurantId));
  }, [restaurantId, dispatch]);

  if (!restaurant) {
    return null;
  }

  const { name } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <Menu restaurantId={restaurantId} />
      {isLoading ? <span>Review loading...</span> : <Reviews restaurantId={restaurantId} />}
    </div>
  );
};