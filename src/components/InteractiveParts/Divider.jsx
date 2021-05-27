import React from 'react';
import '@styles/main.scss';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.string.isRequired,
};

const Divider = ({ children }) => {
  return (
    <>
      <hr className="card__decoration" />
      <div className="card__middle-paragraph">{children}</div>
    </>
  );
};

Divider.propTypes = propTypes;

export default Divider;
