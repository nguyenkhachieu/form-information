import { FETCH_API, SUBMIT_DATA, ERROR_FIELD } from './constants';

export const getApi = () => {
    return {
      type : FETCH_API,
    }
}

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