import React from 'react';
import LoginForm from '@components/LogInPage/LoginForm';
import Button from '@components/InteractiveParts/Button';
import CardHeading from '@components/InteractiveParts/CardHeading';
import Divider from '@components/InteractiveParts/Divider';
import '@styles/main.scss';

const LogInCard = () => (
  <div className="card">
    <CardHeading
      title="Log in"
      subtitle="Don't have an account?"
      buttonText="Sign in"
      route="/sign"
    />
    <div className="card__button-wrapper">
      <Button className="card__button-google">Continue with Google</Button>
      <Button className="card__button-microsoft">Continue with Microsoft</Button>
    </div>
    <Divider>or</Divider>
    <LoginForm />
  </div>
);

export default LogInCard;
