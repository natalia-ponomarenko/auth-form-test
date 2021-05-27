import React from 'react';
import '@styles/main.scss';
import PropTypes from 'prop-types';

const Error = ({ children }) => {
  return <div className="form__error">{children}</div>;
};

export default Error;

Error.propTypes = {
  children: PropTypes.string.isRequired,
};
