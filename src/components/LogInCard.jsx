import React from 'react';
import LoginForm from './LoginForm';
import ButtonLink from './InteractiveParts/Button';
import CardHeading from './CardHeading';
import Divider from './InteractiveParts/Divider';
import '@styles/main.scss';

const LogInCard = () => (
  <div className="card">
    <CardHeading title="Log in" subtitle="Don't have an account?" buttonText="Sign in" />
    <div className="card__button-wrapper">
      <ButtonLink className="card__button-google">Continue with Google</ButtonLink>
      <ButtonLink className="card__button-microsoft">Continue with Microsoft</ButtonLink>
    </div>
    <Divider>or</Divider>
    <LoginForm />
  </div>
);

export default LogInCard;
