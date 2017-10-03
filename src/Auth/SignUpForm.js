import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Segment, Message } from 'semantic-ui-react';
import './index.css';


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
  const { handleSubmit, error, fetching } = props;
  return (
    <Form loading={fetching} size='large' onSubmit={handleSubmit}>
      <Segment raised padded='very'>
        { error && <Message negative content={error} /> }
        <Field name='username' component={UsernameInput} />
        <Field name='email' component={EmailInput} />
        <Field name='password' component={PasswordInput} />
        <Button primary fluid size='large' type='submit'>Sign Up</Button>
        <p className='formFooter'>Already have an account? <Link to="/login">Log In</Link> here.</p>
      </Segment>
    </Form>
  );
};

export default reduxForm({
  form: 'sign_up',
  validate,
})(SignUpForm);
