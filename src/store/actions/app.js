import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const changeRating = (account, app, rating) => async (dispatch) => {
    var rate = {
        rating: rating
    }
    try {
        const rated = await axios.patch('accounts/' + account + '/apps/' + app + '.json', rate);
        dispatch({
            type: actionTypes.CHANGE_RATING,
            app: rated.data
        });
    } catch (error) {
        dispatch({
            type: actionTypes.CHANGE_RATING_FAIL,
            error: error
        });
    }
};