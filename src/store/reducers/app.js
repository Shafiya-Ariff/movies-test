import * as actionTypes from '../actions/actionTypes';

const initialState = {
    error: null,
    app: null,
    loading: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_RATING:
            return {
                ...state,
                error: null,
                app: action.app,
                loading: action.loading
            }
        case actionTypes.CHANGE_RATING_FAIL:
            return {
                ...state,
                error: action.error,
                loading: action.loading
            }
        default:
            return state;
    }
};

export default reducer;