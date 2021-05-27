import React, { forwardRef } from 'react';
import '@styles/main.scss';
import PropTypes from 'prop-types';

const propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};

const defaultProps = {
  type: 'text',
  className: '',
  placeholder: '',
  error: '',
};

const Input = forwardRef(({ className, type, placeholder, error, ...props }, ref) => {
  return (
    <>
      <input {...props} className={className} type={type} placeholder={placeholder} ref={ref} />
      {error && <div className="form__error">{error}</div>}
    </>
  );
});

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
