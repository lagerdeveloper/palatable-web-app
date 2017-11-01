import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Segment, Message } from 'semantic-ui-react';
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
  return (
    <Form.Field>
      <Input
        icon='user'
        iconPosition='left'
        placeholder='Email or Username'
        type='text'
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

const SignInForm = (props) => {
  const { handleSubmit, error, fetching } = props;
  return (
    <Form loading={fetching} size='large' onSubmit={handleSubmit}>
      <Segment raised padded='very'>
        { error && <Message negative content={error} /> }
        <Field name='login' component={LoginInput} />
        <Field name='password' component={PasswordInput} />
        <Button primary fluid size='large' type='submit'>Sign In</Button>
        <p className='formFooter'>Dont have an account? <Link to="/sign_up">Sign Up</Link></p>
      </Segment>
    </Form>
  );
};

export default reduxForm({
  form: 'sign_in',
  validate,
})(SignInForm);
