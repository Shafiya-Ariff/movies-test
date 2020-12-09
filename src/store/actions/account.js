import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const getAccounts = (acc) => async (dispatch) => {
    try {
        const account = await axios.get('accounts/' + acc + '/apps.json');
        dispatch({
            type: actionTypes.GET_ACCOUNTS,
            account: account.data
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ACCOUNTS_FAIL,
            error: error
        });
    }
};