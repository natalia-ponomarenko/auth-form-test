import React from 'react';
import '@styles/main.scss';
import PropTypes from 'prop-types';

const Button = ({ className, onClick, children }) => {
  return (
    <button type="submit" className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  onClick: () => {},
};
