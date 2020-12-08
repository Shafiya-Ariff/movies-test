import {combineReducers} from 'redux';
import userReducer from './user';
import accountReducer from './account';
import appReducer from './app';

export default combineReducers({
    user: userReducer,
    account: accountReducer,
    app: appReducer
});