import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Input, Button, Segment, Message } from 'semantic-ui-react';


function validate({ username, email, password }) {
  let errors = {};
  if (!email) {
    errors.email = 'Must provide an email.';
  }
  if(!password) {
    errors.password = 'Must provide a password';
  }
  return errors;
}

const UsernameInput = ({ input, meta }) => {
  return (
    <Form.Field>
      <Input
        icon='user'
        iconPosition='left'
        placeholder='Username(optional)'
        type='text'
        {...input}
      />
      { meta.touched && meta.error &&
        <Message size='small' attached='bottom' negative content={meta.error} />
      }
    </Form.Field>
  );
};

const EmailInput = ({ input, meta }) => {
  return (
    <Form.Field>
      <Input
        icon='mail outline'
        iconPosition='left'
        placeholder='Email'
        type='email'
        {...input}
      />
      { meta.touched && meta.error &&
        <Message size='small' attached='bottom' negative content={meta.error} />
      }
    </Form.Field>
  );
};

const PasswordInput = ({ input, meta }) => {
  return (
    <Form.Field>
      <Input
        icon='lock'
        iconPosition='left'
        placeholder='Password'
        type='password'
        {...input}
      />
      { meta.touched && meta.error &&
        <Message size='small' attached='bottom' negative content={meta.error} />
      }
    </Form.Field>
  );
};

const SignUpForm = (props) => {
  const { handleSubmit, error } = props;
  return (
    <Form size='large' onSubmit={handleSubmit}>
      <Segment raised padded='very'>
        { error && <Message negative list={error} /> }
        <Field name='username' component={UsernameInput} />
        <Field name='email' component={EmailInput} />
        <Field name='password' component={PasswordInput} />
        <Button primary fluid size='large' type='submit'>Sign Up</Button>
      </Segment>
    </Form>
  );
};

export default reduxForm({
  form: 'sign_up',
  validate,
})(SignUpForm);
