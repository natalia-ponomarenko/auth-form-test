import React from 'react';
import CardHeading from '@components/InteractiveParts/CardHeading';
import RestorePasswordForm from './RestorePasswordForm';
import '@styles/main.scss';

const RestorePasswordCard = () => (
  <div className="card">
    <CardHeading
      title="Reset password"
      subtitle="Enter your email address and we'll send you a link to reset password"
      route="/sign"
    />
    <RestorePasswordForm />
  </div>
);

export default RestorePasswordCard;
