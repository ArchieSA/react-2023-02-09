import React from 'react'
import { Dish } from './../Dish/Dish'

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {menu.map((item) => (
          <li>
            <Dish dish={item}></Dish>
          </li>
        ))}
      </ul>
    </div>
  )
}
