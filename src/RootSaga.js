import { all } from 'redux-saga/effects';
import { watchSignUp } from './Auth/Sagas/SignUpSaga';
import { watchSignIn } from './Auth/Sagas/SignInSaga';

export default function* rootSaga() {
  yield all([
    watchSignUp(),
    watchSignIn(),
  ]);
}
