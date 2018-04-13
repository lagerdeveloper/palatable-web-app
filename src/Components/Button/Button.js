import React from 'react';
import './Button.css';

const Button = (props) => {
  const { children, primary, ...rest } = props;
  return (
    <button
      className={`btn ${primary && 'btn-primary'}`}
      {...rest}
    >
      { children }
    </button>
  )
};

export default Button;
