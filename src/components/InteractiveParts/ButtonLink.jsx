import React from 'react';
import '@styles/main.scss';
import PropTypes from 'prop-types';

const ButtonLink = ({ className, onClick, children }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
};

ButtonLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ButtonLink.defaultProps = {
  className: '',
  onClick: () => {},
};

export default ButtonLink;
