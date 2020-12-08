import * as actionTypes from './actionTypes';
import axios from 'axios';

export const changeRatingSuccess = (app) => {
    return {
        type: actionTypes.CHANGE_RATING,
        app: app
    }
}

export const changeRatingFail = (error) => {
    return {
        type: actionTypes.CHANGE_RATING_FAIL,
        error: error
    }
}

export const changeRating = (account,app, rating) => {
    var rate = {
        rating: rating
    }
    return dispatch => {
        axios.patch('https://taskpro-165b8-default-rtdb.firebaseio.com/accounts/'+account+'/apps/'+app+'.json', rate)
            .then(res => {
                dispatch(changeRatingSuccess(res.data));
            })
            .catch(err => {
                dispatch(changeRatingFail(err.response.data.errors));
            });
    }
}