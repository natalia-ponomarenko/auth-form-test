import Button from '@components/InteractiveParts/Button';
import CardHeading from '@components/InteractiveParts/CardHeading';
import Divider from '@components/InteractiveParts/Divider';
import { HOME } from '@constants/path.constants';
import '@styles/main.scss';
import React from 'react';
import SignInForm from './SignInForm';

const SignInCard = () => (
  <div className="card">
    <CardHeading
      title="Sign in"
      subtitle="Already have an account?"
      buttonText="Log in"
      route={HOME}
    />
    <div className="card__button-wrapper">
      <Button className="card__button-google">Continue with Google</Button>
      <Button className="card__button-microsoft">Continue with Microsoft</Button>
    </div>
    <Divider>or</Divider>
    <SignInForm />
  </div>
);

export default SignInCard;
