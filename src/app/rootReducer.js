import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counter/counterReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
});

export default rootReducer;