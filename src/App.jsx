import { RestaurantPage } from "./pages/RestaurantPage/RestaurantPage";
import { restaurants } from "./constants/data";

export const App = () => {
  return (
    <div>
      <RestaurantPage restaurants={restaurants} />
    </div>
  );
};
