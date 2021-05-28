import React from 'react';
import CardHeading from '@components/CardHeading';
import Divider from '@components/InteractiveParts/Divider';
import Button from '@components/InteractiveParts/Button';
import SignInForm from './SignInForm';
import '@styles/main.scss';

const SignInCard = () => (
  <div className="card">
    <CardHeading title="Sign in" subtitle="Already have an account?" buttonText="Log in" />
    <div className="card__button-wrapper">
      <Button className="card__button-google">Continue with Google</Button>
      <Button className="card__button-microsoft">Continue with Microsoft</Button>
    </div>
    <Divider>or</Divider>
    <SignInForm />
  </div>
);

export default SignInCard;
