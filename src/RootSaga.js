import { all } from 'redux-saga/effects';
import { watchSignUp } from './Auth/Sagas/SignUpSaga';

export default function* rootSaga() {
  yield all([
    watchSignUp(),
  ]);
}
