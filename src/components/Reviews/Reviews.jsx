import React from "react";
import { Review } from "../Review/Review";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(
          (reveiw) =>
            !!reveiw && (
              <li>
                <Review {...reveiw} />
              </li>
            )
        )}
      </ul>
    </div>
  );
};
