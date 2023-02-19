import React from 'react'
import { Restaurant } from '../../components/Restaurant/Restaurant'

export const RestaurantPage = ({ restaurants }) => {
  return React.createElement('div', {
    children: [
      React.createElement(Restaurant, { restaurant: restaurants[0] }),
      React.createElement(Restaurant, { restaurant: restaurants[1] }),
      React.createElement(Restaurant, { restaurant: restaurants[2] }),
      React.createElement(Restaurant, { restaurant: restaurants[3] }),
    ],
  })
}
