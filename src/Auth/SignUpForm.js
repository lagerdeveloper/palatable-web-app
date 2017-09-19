import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SignUpForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name='name' component='input' placeholder='Name' />
    </form>
  );
};

export default reduxForm({
  form: 'sign_up',
})(SignUpForm);
