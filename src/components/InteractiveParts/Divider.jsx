import React from 'react';
import '@styles/main.scss';
import PropTypes from 'prop-types';

const Divider = ({ children }) => {
  return (
    <>
      <hr className="card__decoration" />
      <div className="card__middle-paragraph">{children}</div>
    </>
  );
};

export default Divider;

Divider.propTypes = {
  children: PropTypes.string.isRequired,
};
