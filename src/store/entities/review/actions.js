const REVIEW_ACTIONS = {
    startLoading: 'review/startLoading',
    finishLoading:'review/finishLoading',
    failLoading:'review/failLoading'
}

export const startLoadingReviews = () => ({
    type: REVIEW_ACTIONS.startLoading
})

export const finishLoadingReviews = (reviews) => ({
    type: REVIEW_ACTIONS.finishLoading,
    payload: reviews
})

export const failLoadingReviews = () => ({
    type: REVIEW_ACTIONS.failLoading,
})