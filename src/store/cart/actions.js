const CART_ACTION = {
    incrementDish: 'cart/incrementDish',
    decrementDish: 'cart/decrementDish'
}

export const incrementDishCart = (dish) => ({
    type: CART_ACTION.incrementDish,
    payload: dish.name
})

export const decrementDishCart = (dish) => ({
    type: CART_ACTION.decrementDish,
    payload: dish.name
})