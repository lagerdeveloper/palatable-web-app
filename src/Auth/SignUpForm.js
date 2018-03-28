import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Segment, Message } from 'semantic-ui-react';
import PersonIcon from 'react-icons/lib/md/person';
import EmailIcon from 'react-icons/lib/md/email';
import './index.css';

class MyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  render() {
    const { focused } = this.state;
    const { icon } = this.props;
    return (
      <div className={`input-container ${focused ? 'focus' : ''}`}>
        {icon && React.cloneElement(icon, { className: `input-icon ${focused ? 'focus' : ''}`, size: 25 }) }
        <input
          autoFocus
          onFocus={e => this.setState({ focused: true })}
          onBlur={e => this.setState({ focused: false })}
          className="input"
          type='text'
          placeholder='Username(optional)'
        />
      </div>
    );
  }
}

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
    <MyInput icon={<PersonIcon />} />
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
  const { handleSubmit, error, submitting } = props;
  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      { error && <p>{error}</p> }
      <Field name='username' component={UsernameInput} />
      <Field name='email' component={EmailInput} />
      <Field name='password' component={PasswordInput} />
      <button type='submit'>Sign Up</button>
      <p className='formFooter'>Already have an account? <Link to="/sign_in">Sign In</Link></p>
    </form>
  );
};

export default reduxForm({
  form: 'sign_up',
  validate,
})(SignUpForm);
