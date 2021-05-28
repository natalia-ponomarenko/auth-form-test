import cn from 'classnames';
import React from 'react';
import '@styles/main.scss';
import { useForm } from 'react-hook-form';
import Button from '@components/InteractiveParts/Button';
import Input from '@components/InteractiveParts/Input';
import { Link } from 'react-router-dom';

const RestorePasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const emailValidationRegExp =
    /^[a-zA-Z0-9.!#$%&"*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const onSubmit = (data) => {
    console.log(data);
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
            value: emailValidationRegExp,
            message: 'Email is invalid!',
          },
        })}
        placeholder="Email"
        error={errors.email?.message}
      />
      <Button>Send reset link</Button>
      <div className="restore-password__button-wrapper">
        <Link to="/home">
          <Button type="button" className="card__sign-button" route="/home">
            Back to Log in
          </Button>
        </Link>
      </div>
    </form>
  );
};

export default RestorePasswordForm;
