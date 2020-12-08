import * as actionTypes from '../actions/actionTypes';

const initialState = {
    error: null,
    users: [],
    loading: true,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USERS:
            return {
                ...state,
                error: [],
                users: action.users,
                loading: false
            }
        case actionTypes.GET_USERS_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return state;
    }
};

export default reducer;