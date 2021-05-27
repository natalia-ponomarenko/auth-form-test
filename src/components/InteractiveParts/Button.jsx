import React from 'react';
import '@styles/main.scss';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

const defaultProps = {
  className: 'form__button',
  onClick: () => {},
};

const Button = ({ className, onClick, children }) => {
  return (
    <button type="submit" className={className} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
