import CardHeading from '@components/InteractiveParts/CardHeading';
import { SIGN } from '@constants/path.constants';
import '@styles/main.scss';
import React from 'react';
import RestorePasswordForm from './RestorePasswordForm';

const RestorePasswordCard = () => (
  <div className="card">
    <CardHeading
      title="Reset password"
      subtitle="Enter your email address and we'll send you a link to reset password"
      route={SIGN}
    />
    <RestorePasswordForm />
  </div>
);

export default RestorePasswordCard;
