import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import Input from '../Components/Input/Input';
import Button from '../Components/Button/Button';
import LockIcon from 'react-icons/lib/md/lock';
import PersonIcon from 'react-icons/lib/md/person';
import './index.css';


function validate({ login, password }) {
  let errors = {};
  if (!login) {
    errors.login = 'Must provide a username or email.';
  }
  if(!password) {
    errors.password = 'Must provide a password';
  }
  return errors;
}

const LoginInput = ({ input, meta }) => {
  const { touched, error } = meta;
  return (
    <Input
      icon={<PersonIcon />}
      placeholder='Email or Username'
      type='text'
      error={ touched && error ? error : undefined}
      {...input}
    />
  );
};

const PasswordInput = ({ input, meta }) => {
  const { touched, error } = meta;
  return (
    <Input
      icon={<LockIcon />}
      placeholder='Password'
      type='password'
      error={ touched && error ? error : undefined}
      {...input}
    />
  );
};

const SignInForm = (props) => {
  const { handleSubmit, error, submitting } = props;
  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      { error && <p>{error}</p> }
      <Field name='login' component={LoginInput} />
      <Field name='password' component={PasswordInput} />
      <Button primary type='submit'>Sign In</Button>
      <p className='formFooter'>Dont have an account? <Link to="/sign_up">Sign Up</Link></p>
    </form>
  );
};

export default reduxForm({
  form: 'sign_in',
  validate,
})(SignInForm);
