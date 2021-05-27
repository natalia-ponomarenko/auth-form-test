import React, { forwardRef } from 'react';
import '@styles/main.scss';
import PropTypes from 'prop-types';
import Error from './Error';

const Input = forwardRef(
  ({ className, type, nameOfInput, placeholder, value, onChange, error }, ref) => {
    return (
      <>
        <input
          className={className}
          type={type}
          name={nameOfInput}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          ref={ref}
        />
        {error && <Error>Email is invalid!</Error>}
      </>
    );
  },
);

export default Input;

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  nameOfInput: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
};

Input.defaultProps = {
  className: '',
  placeholder: '',
};
