import * as actionTypes from '../actions/actionTypes';

const initialState = {
    error: null,
    account: null,
    loading: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ACCOUNTS:
            return {
                ...state,
                error: [],
                account: action.account,
                loading: action.loading
            }
        case actionTypes.GET_ACCOUNTS_FAIL:
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