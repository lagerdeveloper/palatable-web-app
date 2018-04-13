import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import Input from '../Components/Input/Input';
import Button from '../Components/Button/Button';
import PersonIcon from 'react-icons/lib/md/person';
import EmailIcon from 'react-icons/lib/md/email';
import LockIcon from 'react-icons/lib/md/lock';
import './index.css';

function validate({ username, email, password }) {
  let errors = {};
  if (!email) {
    errors.email = 'Email cannot be blank';
  }
  if(!password) {
    errors.password = 'Password cannot be blank';
  }
  return errors;
}

const UsernameInput = ({ input, meta }) => {
  return (
    <Input
      icon={<PersonIcon />}
      type='text'
      placeholder='Username(optional)'
      {...input}
    />
  );
};

const EmailInput = ({ input, meta }) => {
  const { error, touched } = meta;
  return (
    <Input
      icon={<EmailIcon />}
      type='text'
      placeholder='Email'
      error={touched && error ? error : undefined}
      {...input}
    />
  );
};

const PasswordInput = ({ input, meta }) => {
  const { touched, error } = meta;
  return (
    <Input
      icon={<LockIcon />}
      type='password'
      placeholder='Password'
      error={touched && error ? error : undefined}
      {...input}
    />
  );
};

const SignUpForm = (props) => {
  const { handleSubmit, error, submitting } = props;
  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      { error && <p>{error}</p> }
      <Field name='username' component={UsernameInput} />
      <Field name='email' component={EmailInput} />
      <Field name='password' component={PasswordInput} />
      <Button primary type='submit'>Join Palatable</Button>
      <p className='formFooter'>Already have an account? <Link to="/sign_in">Sign In</Link></p>
    </form>
  );
};

export default reduxForm({
  form: 'sign_up',
  validate,
})(SignUpForm);
