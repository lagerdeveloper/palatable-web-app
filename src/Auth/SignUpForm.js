import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Input, Button, Grid, Segment } from 'semantic-ui-react';


const NameInput = ({ input, meta }) => {
  return (
    <Form.Field>
      <Input
        icon='user'
        iconPosition='left'
        placeholder='Name'
        type='text'
        {...input}
      />
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
    </Form.Field>
  );
};

const PasswordInput = ({ input, meta }) => {
  return (
    <Form.Field>
      <p>hello</p>
      <Input
        icon='lock'
        iconPosition='left'
        placeholder='Password'
        type='password'
        {...input}
      />
    </Form.Field>
  );
};

const SignUpForm = (props) => {
  const { handleSubmit } = props;
  return (
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form size='large' onSubmit={handleSubmit}>
          <Segment raised padded='very'>
            <Field name='name' component={NameInput} />
            <Field name='email' component={EmailInput} />
            <Field name='password' component={PasswordInput} />
            <Button primary fluid size='large' type='submit'>Sign Up</Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default reduxForm({
  form: 'sign_up',
})(SignUpForm);
