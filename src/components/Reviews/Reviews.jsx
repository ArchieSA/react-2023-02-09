import React from "react";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <div>{reviews}</div>
    </div>
  );

  // return React.createElement('div', {
  //   children: [
  //     React.createElement('h3', {
  //       children: 'Reviews'
  //     }),
  //     React.createElement('div', {
  //       children: reviews
  //     })
  //   ]
  // })
};
