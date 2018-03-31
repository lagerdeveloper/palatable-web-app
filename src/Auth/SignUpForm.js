import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import PersonIcon from 'react-icons/lib/md/person';
import EmailIcon from 'react-icons/lib/md/email';
import LockIcon from 'react-icons/lib/md/lock';
import './index.css';

class MyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      error: props.error || false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { error } = nextProps;
    if (error !== this.props.error ) {
      this.setState({ error });
    }
  }

  determineState() {}

  render() {
    const { focused, error } = this.state;
    const { icon, ...rest } = this.props;
    return (
      <div className="input-container">
        <div className={`input-group ${focused ? 'focus' : ''}`}>
          {icon && React.cloneElement(icon, { className: `input-icon ${focused ? 'focus' : ''}`, size: 25 }) }
          <input
            onFocus={e => this.setState({ focused: true })}
            onBlur={e => this.setState({ focused: false })}
            className="input"
            {...rest}
          />
        </div>
        { error && <p className='error-message'>{error}</p>}
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
    <MyInput
      icon={<PersonIcon />}
      type='text'
      placeholder='Username(optional)'
      error='hello dude this is great omg this is amazing yall are crazy'
    />
  );
};

const EmailInput = ({ input, meta }) => {
  return (
    <MyInput
      icon={<EmailIcon />}
      type='text'
      placeholder='Email'
    />
  );
};

const PasswordInput = ({ input, meta }) => {
  return (
    <MyInput
      icon={<LockIcon />}
      type='password'
      placeholder='Password'
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
      <button type='submit'>Sign Up</button>
      <p className='formFooter'>Already have an account? <Link to="/sign_in">Sign In</Link></p>
    </form>
  );
};

export default reduxForm({
  form: 'sign_up',
  validate,
})(SignUpForm);
