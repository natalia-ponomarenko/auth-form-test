import React from 'react';
import '@styles/main.scss';
import PropTypes from 'prop-types';
import Button from './InteractiveParts/Button';

const CardHeading = ({ title, subtitle, onClick, buttonText }) => {
  return (
    <>
      <div className="card__title">{title}</div>
      <div className="card__subtitle-wrapper">
        <div className="card__subtitle">{subtitle}</div>
        <Button type="button" className="card__sign-button" onClick={onClick}>
          {buttonText}
        </Button>
      </div>
    </>
  );
};

CardHeading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onClick: PropTypes.func,
  buttonText: PropTypes.string.isRequired,
};

CardHeading.defaultProps = {
  title: '',
  subtitle: '',
  onClick: () => {},
};

export default CardHeading;
