import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from 'semantic-ui-react';


const NameInput = ({ input, meta }) => {
  return (
    <Input
      icon='user'
      iconPosition='left'
      placeholder='Name'
      {...input}
    />
  );
};

const EmailInput = ({ input, meta }) => {
  return (
    <Input
      icon='mail outline'
      iconPosition='left'
      placeholder='Email'
      {...input}
    />
  );
};

const SignUpForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name='name' component={NameInput} />
      <Field name='email' component={EmailInput} />
    </form>
  );
};

export default reduxForm({
  form: 'sign_up',
})(SignUpForm);
