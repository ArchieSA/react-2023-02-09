import React from "react";
import { Menu } from '../Menu/Menu'
import { Reviews } from '../Reviews/Reviews'

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  )
  
  // return React.createElement('div', {
  //   children: [
  //     React.createElement('h2', { children: restaurant.name }),
  //     React.createElement(Menu, { menu: restaurant.menu }),
  //     React.createElement(Reviews, { reviews: restaurant.reviews }),
  //   ],
  // })
}
