import React from 'react';
import '@styles/main.scss';
import PropTypes from 'prop-types';
import Button from './InteractiveParts/Button';

const propTypes = {
  buttonText: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onClick: PropTypes.func,
};

const defaultProps = {
  title: '',
  subtitle: '',
  onClick: () => {},
};

const CardHeading = ({ title, subtitle, onClick, buttonText }) => (
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

CardHeading.propTypes = propTypes;
CardHeading.defaultProps = defaultProps;

export default CardHeading;
