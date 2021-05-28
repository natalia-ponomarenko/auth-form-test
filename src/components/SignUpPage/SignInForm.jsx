import cn from 'classnames';
import React from 'react';
import '@styles/main.scss';
import { useForm } from 'react-hook-form';
import Button from '@components/InteractiveParts/Button';
import Input from '@components/InteractiveParts/Input';

const SignInForm = () => {
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
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          className={cn('form__input form__input--email', { error: errors.name?.message })}
          type="text"
          {...register('name', {
            maxLength: {
              value: 20,
              message: 'You exceeded the max lenth!',
            },
            required: 'Enter the name!',
          })}
          placeholder="Name"
          error={errors.name?.message}
        />
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
        <Input
          className={cn('form__input form__input--password', {
            error: errors.password?.message,
          })}
          type="password"
          {...register('password', {
            required: 'Enter the password!',
          })}
          placeholder="Password"
          error={errors.password?.message}
        />
        <Button>Continue</Button>
      </form>
      <div className="signIn__paragraph">
        By signing up, you agree to our{' '}
        <a href="." className="signIn__link">
          Terms of Use
        </a>{' '}
        and{' '}
        <a href="." className="signIn__link">
          {' '}
          Privacy Policy.
        </a>
      </div>
    </>
  );
};

export default SignInForm;
