import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { has } from 'lodash/object';
import { startSubmit, stopSubmit } from 'redux-form';

function signUpRequest({ username, email, password }) {
  return axios.post('sign_up', {
    username,
    email,
    password,
  })
  .then(response => response.data)
  .catch(error => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data.errors);
      return { errors: error.response.data.errors };
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      const errorObject = { _error: 'Error: No Response' };
      return { errors: errorObject };
    } else {
      // Something happened in setting up the request that triggered an Error
      const errorObject = { _error: error.message };
      return { errors: errorObject };
    }
  });
}

function* signUpGenerator(action) {
  yield put(startSubmit('sign_up'));
  let errors = {};
  const data = yield call(signUpRequest, action);
  if (has(data, 'errors')) {
    errors = data.errors;
    yield put({ type: 'SIGN_UP_FAILURE', error: errors });
  } else {
    yield put({ type: 'SIGN_UP_SUCCESS', jwt: data.jwt, login: data.login });
  }
  yield put(stopSubmit('sign_up', errors));
}

export function* watchSignUp() {
  yield takeLatest('SIGN_UP', signUpGenerator);
}
