import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import PersonIcon from 'react-icons/lib/md/person';
import EmailIcon from 'react-icons/lib/md/email';
import LockIcon from 'react-icons/lib/md/lock';
import CheckIcon from 'react-icons/lib/fa/check';
import './index.css';

class MyInput extends React.Component {
  constructor(props) {
    super(props);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.determineInputGroupStyle = this.determineInputGroupStyle.bind(this);
    this.state = {
      focused: false,
      error: props.error || false,
      valid: props.valid || false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { error } = nextProps;
    if (nextProps.hasOwnProperty('valid') && ( nextProps.valid !== this.props.valid)) {
      this.setState({ valid: nextProps.valid });
    }
    if (error !== this.props.error ) {
      this.setState({ error });
    }
  }

  onFocus(event) {
    this.setState({ focused: true });
    if (this.props.hasOwnProperty('onFocus')) {
      this.props.onFocus(event);
    }
  }

  // onBlur event handler for this input
  onBlur(event) {
    this.setState({ focused: false });
    if (this.props.hasOwnProperty('onBlur')) {
      this.props.onBlur(event);
    }
  }

  determineInputGroupStyle() {
    const { error, focused } = this.state;
    if (error) {
      return 'error';
    } else if (focused) {
      return 'focus';
    } else {
      return '';
    }
  }

  render() {
    const { focused, error, valid } = this.state;
    const inputGroupStyle = this.determineInputGroupStyle();
    const { onFocus, onBlur, icon, ...rest } = this.props;
    return (
      <div className="input-container">
        <div className={`input-group ${inputGroupStyle}`}>
          {icon && React.cloneElement(icon, { className: `input-icon ${inputGroupStyle}`, size: 25 }) }
          <input
            onFocus={e => { this.setState({ focused: true });  }}
            onBlur={e => this.onBlur(e) }
            className="input"
            {...rest}
          />
          { valid && <CheckIcon color="#57c16a" size={20} /> }
        </div>
        <p className={`error-message ${error ? 'visible' : ''}`}>{error}</p>
      </div>
    );
  }
}

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
    <MyInput
      icon={<PersonIcon />}
      type='text'
      placeholder='Username(optional)'
      {...input}
    />
  );
};

const EmailInput = ({ input, meta }) => {
  const { error, touched, valid } = meta;
  return (
    <MyInput
      icon={<EmailIcon />}
      type='text'
      placeholder='Email'
      error={touched && error ? error : undefined}
      valid={valid}
      {...input}
    />
  );
};

const PasswordInput = ({ input, meta }) => {
  const { touched, error } = meta;
  return (
    <MyInput
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
      <button className='btn btn-primary' type='submit'>Sign Up</button>
      <p className='formFooter'>Already have an account? <Link to="/sign_in">Sign In</Link></p>
    </form>
  );
};

export default reduxForm({
  form: 'sign_up',
  validate,
})(SignUpForm);
