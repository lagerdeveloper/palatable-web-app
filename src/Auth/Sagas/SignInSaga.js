import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { has } from 'lodash/object';
import { startSubmit, stopSubmit } from 'redux-form';

function signInRequest({ login, password }) {
  return axios.post('sign_in', {
    auth: {
      login,
      password,
    },
  })
  .then(response => response.data)
  .catch(error => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data.errors);
      if (typeof(error.response.data.errors) === 'object') {
        return { errors: error.response.data.errors };
      }
      const errorObject = { _error: error.response.data.errors };
      return { errors: errorObject };
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

function* signInGenerator(action) {
  yield put(startSubmit('sign_in'));
  let errors = {};
  const data = yield call(signInRequest, action);
  if (has(data, 'errors')) {
    errors = data.errors;
    yield put({ type: 'SIGN_IN_FAILURE', error: errors });
  } else {
    yield put({ type: 'SIGN_IN_SUCCESS', jwt: data.jwt });
  }
  yield put(stopSubmit('sign_in', errors));
}

export function* watchSignIn() {
  yield takeLatest('SIGN_IN', signInGenerator);
}
