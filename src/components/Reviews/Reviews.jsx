import React from 'react'

export const Reviews = ({ reviews }) => {
  return React.createElement('div', {
    children: [
      React.createElement('h3', { children: 'Reviews' }),
      React.createElement('div', { children: reviews }),
    ],
  })
}
