import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getUsersSuccess = (users) => {
    return {
        type: actionTypes.GET_USERS,
        users: users
    }
}

export const getUsersFail = (error) => {
    return {
        type: actionTypes.GET_USERS_FAIL,
        error: error
    }
}

export const getUsers = () => {
    return dispatch => {
        axios.get('https://taskpro-165b8-default-rtdb.firebaseio.com/users.json')
            .then(res => {
                dispatch(getUsersSuccess(res.data));
            })
            .catch(err => {
                dispatch(getUsersFail(err.response.data.errors));
            });
    }
}