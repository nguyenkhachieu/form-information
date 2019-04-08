import { combineReducers } from 'redux';
import { ERROR_FIELD } from './constants';

var initialState = [];

const dataReducer = (state = initialState, action) => {
  switch(action.type) {
    case ERROR_FIELD:
      return action.errorField
    default: return state;
  }
}

const appReducers = combineReducers({
    dataReducer,
  });

export default appReducers;