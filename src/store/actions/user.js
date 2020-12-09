import * as actionTypes from './actionTypes';
import axios from '../../axios';

//Get users
export const getUsers = () => async (dispatch) => {
    try {
        const users = await axios.get('users.json');
        dispatch({
            type: actionTypes.GET_USERS,
            users: users.data
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_USERS_FAIL,
            error: error
        });
    }
};