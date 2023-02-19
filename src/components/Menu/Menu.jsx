import React from 'react'

export const Menu = ({ menu }) => {
  return React.createElement('div', {
    children: [
      React.createElement('h3', { children: 'Menu' }),
      React.createElement('div', { children: menu }),
    ],
  })
}
