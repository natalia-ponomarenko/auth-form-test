import React from 'react';
import '@styles/main.scss';
import PropTypes from 'prop-types';
import Button from '@components/InteractiveParts/Button';
import { Link } from 'react-router-dom';

const propTypes = {
  route: PropTypes.string,
  buttonText: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onClick: PropTypes.func,
};

const defaultProps = {
  route: '',
  buttonText: '',
  title: '',
  subtitle: '',
  onClick: () => {},
};

const CardHeading = ({ title, subtitle, onClick, buttonText, route }) => (
  <>
    <div className="card__title">{title}</div>
    <div className="card__subtitle-wrapper">
      <div className="card__subtitle">{subtitle}</div>
      <Link to={route}>
        <Button type="button" className="card__sign-button" onClick={onClick}>
          {buttonText}
        </Button>
      </Link>
    </div>
  </>
);

CardHeading.propTypes = propTypes;
CardHeading.defaultProps = defaultProps;

export default CardHeading;
