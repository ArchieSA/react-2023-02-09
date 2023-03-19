import { selectRestaurantReviewsById } from "../../restaurant/selectors";
import { startLoadingReviews, finishLoadingReviews, failLoadingReviews } from "../actions"
import { selectReviewIds } from "../selectors";


export const loadReviewsIfNotExist = (restaurantId) => (dispatch, getState) => {

 if(!restaurantId) return dispatch(failLoadingReviews())

const state = getState()
const reviwsIds = selectReviewIds(state)
const restaurantReviewsById = selectRestaurantReviewsById(state, {restaurantId})

if (restaurantReviewsById.every((id) => reviwsIds.includes(id))) {
    return;
  }
    dispatch(startLoadingReviews())
    fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`)
    .then(res=> res.json())
    .then(data => dispatch(finishLoadingReviews(data)))
    .catch(()=> dispatch(failLoadingReviews()))
}