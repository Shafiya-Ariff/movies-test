import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getAccountsSuccess = (account) => {
    return {
        type: actionTypes.GET_ACCOUNTS,
        account: account
    }
}

export const getAccountsFail = (error) => {
    return {
        type: actionTypes.GET_ACCOUNTS_FAIL,
        error: error
    }
}

export const getAccounts = (account) => {
    return dispatch => {
        axios.get('https://taskpro-165b8-default-rtdb.firebaseio.com/accounts/'+account+'/apps.json')
            .then(res => {
                dispatch(getAccountsSuccess(res.data));
            })
            .catch(err => {
                dispatch(getAccountsFail(err.response.data.errors));
            });
    }
}