import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

class MyInput extends React.Component {
  constructor(props) {
    super(props);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.focusInput = this.focusInput.bind(this);
    this.determineInputGroupStyle = this.determineInputGroupStyle.bind(this);
    this.state = {
      focused: false,
      error: props.error || false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { error } = nextProps;
    if (error !== this.props.error) {
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

  focusInput() {
    this.input.focus();
  }

  render() {
    const { error } = this.state;
    const inputGroupStyle = this.determineInputGroupStyle();
    const { onFocus, onBlur, icon, ...rest } = this.props;
    return (
      <div className="input-container" onClick={this.focusInput}>
        <div className={`input-group ${inputGroupStyle}`}>
          {icon && React.cloneElement(icon, { className: `input-icon ${inputGroupStyle}`, size: 25 }) }
          <input
            ref={input => this.input = input}
            onFocus={e => this.onFocus(e) }
            onBlur={e => this.onBlur(e) }
            className="input"
            {...rest}
          />
        </div>
        {error && <p className='error-message'>{error}</p> }
      </div>
    );
  }
}

MyInput.propTypes = {
  valid: PropTypes.bool,
};

export default MyInput;
