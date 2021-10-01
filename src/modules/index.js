import { combineReducers } from 'redux';
import channel from './channel';
import productDetailSelect from './productDetailSelect';
const rootReducer = combineReducers({
    // counter,
    // todos,
    channel,
    productDetailSelect,
});

export default rootReducer;
