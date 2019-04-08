import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_API, SUBMIT_DATA } from './constants';
import { GetApi, submitFormApi } from './Api';
import { validationForm } from './validation';
import { inputFieldErrors } from './actions';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function* fetchApiSaga() {
   try {
      const data = yield call(GetApi);
      console.log('data', data);
    //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
       console.log('e', e);
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

export function* submitFormSaga(data) {
   try {
      const value = data.params;
      const validation = validationForm(value);
      const { checkInput } = validation;
      const errorField = validation.errors;
      if (!checkInput) {
         yield put(inputFieldErrors(errorField));
      } 
      else {
         value['idCard'] = value['idCard'] && URL.createObjectURL(value['idCard']);
         const dataSubmit = yield call(submitFormApi, value);
         console.log('dataSubmit', dataSubmit);
      }
   } catch (error) {
    throw error;
   }
}

export default function* mySaga() {
  yield takeLatest(FETCH_API, fetchApiSaga);
  yield takeLatest(SUBMIT_DATA, submitFormSaga);
}