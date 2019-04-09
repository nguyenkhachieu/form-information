import { combineReducers } from 'redux';
import { ERROR_FIELD, SUBMIT_DATA_SUCCESS } from './constants';

var initialState = false;

const dataReducer = (state = initialState, action) => {
  switch(action.type) {
    case ERROR_FIELD:
      return action.errorField;
    default: return state;
  }
}

const dataFormSuccess = (state = initialState, action) => {
  switch(action.type) {
    case SUBMIT_DATA_SUCCESS:
      return action.params;
    default: return state;
  }
}

const appReducers = combineReducers({
    dataReducer,
    dataFormSuccess,
  });

export default appReducers;