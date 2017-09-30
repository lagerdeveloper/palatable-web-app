import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './Auth/authReducer';

export default combineReducers({
  form: formReducer,
  auth,
});
