import { takeLatest, call, put } from 'redux-saga/effects';


function signUpRequest({ username, email, password }) {

}

function* signUpGenerator(action) {
  try {
    yield call(signUpRequest, action);
  } catch (e) {
    yield put({ type: 'SIGN_UP_FAILURE', error: e.message });
  }
}

export function* watchSignUp() {
  yield takeLatest('SIGN_UP', signUpGenerator);
}
