import React from 'react'
import { Menu } from './../Menu/Menu'
import { Reviews } from './../Reviews/Reviews'

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant
  const restaurantDishes = menu.map(({ name }) => name).join(' ,')
  const restaurantReviews = reviews.map(({ text }) => text).join(' ,')

  return React.createElement('div', {
    children: [
      React.createElement('h2', { children: name }),
      React.createElement(Menu, { menu: restaurantDishes }),
      React.createElement(Reviews, { reviews: restaurantReviews }),
    ],
  })
}
