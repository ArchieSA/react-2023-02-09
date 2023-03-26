import { withAuthorized } from "../../hocs/withAuthorized";
import { RestaurantTabs } from "./RestaurantTabs";

export const RestaurantTabsWithAuthorized = withAuthorized(
  RestaurantTabs,
  <span>Empty</span>
);
