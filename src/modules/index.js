import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
import channel from './channel';

const rootReducer = combineReducers({
    // counter,
    // todos,
    channel,
});

export default rootReducer;
