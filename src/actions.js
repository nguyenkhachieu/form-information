import { 
  SUBMIT_DATA,
  ERROR_FIELD,
  SUBMIT_DATA_SUCCESS,
} from './constants';

export const submitForm = (data) => {
  return {
    type : SUBMIT_DATA,
    params: data,
  }
}

export const inputFieldErrors = (errorField) => {
  return {
    type : ERROR_FIELD,
    errorField,
  }
}

export const submitFormSuccess = (data) => {
    return {
      type : SUBMIT_DATA_SUCCESS,
      params: data,
    }
}