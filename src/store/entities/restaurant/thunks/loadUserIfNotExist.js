import { selectRestaurantIds } from "../selectors";

import {
  failLoadingUsers,
  finishLoadingUsers
} from "../actions";

export const loadUserIfNotExist = () => (dispatch, getState) => {
  
  const state = getState();
  const restaurantIds = selectRestaurantIds(state);

  if (restaurantIds.length) {
    return;
  }


    fetch(`http://localhost:3001/api/restaurants/`)
    .then((response) => response.json())
    .then((users) => dispatch(finishLoadingUsers(users)))
    .catch(() => dispatch(failLoadingUsers()));

};
// import { restaurantActions } from "..";
// import { selectRestaurantIds } from "../selectors";

// export const loadRestaurantIfNotExist = (store) => (next) => (action) => {
//   if (action?.type !== restaurantActions.loadRestaurantsAction.type) {
//     return next(action);
//   }

//   const restaurantIds = selectRestaurantIds(store.getState());

//   if (restaurantIds.length) {
//     return;
//   }

//   store.dispatch(restaurantActions.startLoading());
//   fetch("http://localhost:3001/api/restaurants/")
//     .then((response) => response.json())
//     .then((restaurants) =>
//       store.dispatch(restaurantActions.finishLoading(restaurants))
//     )
//     .catch(() => store.dispatch(restaurantActions.failLoading()));
// };

