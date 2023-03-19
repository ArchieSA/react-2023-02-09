import { REQUEST_STATUSES } from "../../../constants/statuses";
import { REVIEW_ACTIONS } from "./actions";

const initialState = {
  entities: {},
  ids: [],
  status: REQUEST_STATUSES.idle,
};

export const reviewReducer = (state = initialState, action) => {

  switch (action?.type) {
    case REVIEW_ACTIONS.startLoading:
      return { ...state, status: REQUEST_STATUSES.pending };
    case REVIEW_ACTIONS.finishLoading:
      return {
        entities: {
          ...state.entities,
          ...action.payload.reduce((acc, review) => {
            acc[review.id] = review;

            return acc;
          }, {}),
        },
        ids: Array.from(
          new Set([...state.ids, ...action.payload.map(({ id }) => id)])
        ),
        status: REQUEST_STATUSES.success,
      };
    case REVIEW_ACTIONS.failLoading:
      return { ...state, status: REQUEST_STATUSES.failed };

    default:
      return state;
  }
};
