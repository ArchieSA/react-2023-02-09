import React from "react";

export const Reviews = ({data}) => {
  const starActive = '★'
  const getViewRating = (rating) => new Array(rating).fill(starActive).join('')

  const getView = ({text,rating,user }) => `${text}
  Автор: ${user}
  Рейтинг: ${getViewRating(rating)}
  
  `
  const reviews = data.map(el => getView(el))
  return (
      <div>
        <h3>Reviews</h3>
        <div style={{whiteSpace: 'pre-line'}}>{reviews}</div>
      </div>
  );
};
