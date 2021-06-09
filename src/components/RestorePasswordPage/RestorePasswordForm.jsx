import cn from 'classnames';
import React, { useState } from 'react';
import '@styles/main.scss';
import { useForm } from 'react-hook-form';
import Button from '@components/InteractiveParts/Button';
import Input from '@components/InteractiveParts/Input';
import { Link } from 'react-router-dom';
import { HOME } from '@constants/path.constants';
import { EMAIL_VALIDATION } from '@constants/variables';

const RestorePasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [messageSuccess, setMessageSuccess] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setMessageSuccess(true);
    reset();
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Input
        className={cn('form__input form__input--email', { error: errors.email?.message })}
        type="text"
        {...register('email', {
          required: 'Enter the email!',
          pattern: {
            value: EMAIL_VALIDATION,
            message: 'Email is invalid!',
          },
        })}
        placeholder="Email"
        error={errors.email?.message}
      />
      {messageSuccess && <div className="form__message message">Check the email for link!</div>}
      <Button>Send reset link</Button>
      <div className="restore-password__button-wrapper">
        <Link to={HOME}>
          <Button type="button" className="card__sign-button" route={HOME}>
            Back to Log in
          </Button>
        </Link>
      </div>
    </form>
  );
};

export default RestorePasswordForm;
