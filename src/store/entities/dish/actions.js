export const DISH_ACTIONS = {
  startLoading: "dish/startLoading",
  finishLoading: "dish/finishLoading",
  failLoading: "dish/failLoading",
};

export const startLoadDishes = () => ({
  type: DISH_ACTIONS.startLoading,
});
export const finishLoadingDishes = (dishes) => ({
  type: DISH_ACTIONS.finishLoading,
  payload: dishes,
});
export const failLoadingDishes = () => ({
  type: DISH_ACTIONS.failLoading,
});
