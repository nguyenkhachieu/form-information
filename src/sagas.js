import { call, put, takeLatest } from 'redux-saga/effects';
import { SUBMIT_DATA } from './constants';
import { submitFormApi } from './Api';
import { validationForm } from './validation';
import { inputFieldErrors, submitFormSuccess } from './actions';

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
         yield put(submitFormSuccess(dataSubmit));
      }
   } catch (error) {
    throw error;
   }
}

export default function* mySaga() {
  yield takeLatest(SUBMIT_DATA, submitFormSaga);
}