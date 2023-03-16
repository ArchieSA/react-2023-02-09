import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Cart } from "../../components/Cart/Cart";
import { Restaurant } from "../../components/Restaurant/Restaurant";
import { RestaurantTabs } from "../../containers/RestaurantTabs/RestaurantTabs";
import { selectRestaurantIds } from "../../store/entities/restaurant/selectors";

export const RestaurantPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantIds[0]
  );

  return (
    <div>
      <RestaurantTabs
        activeId={activeRestaurantId}
        onTabClick={setActiveRestaurantId}
      />
      {activeRestaurantId && <Restaurant restaurantId={activeRestaurantId} />}
      <Cart />
    </div>
  );
};
