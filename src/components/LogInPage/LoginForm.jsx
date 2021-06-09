import { RESTORE } from '@constants/path.constants';
import '@styles/main.scss';
import cn from 'classnames';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '../InteractiveParts/Button';
import CheckBoxGroup from '../InteractiveParts/CheckBoxGroup';
import Input from '../InteractiveParts/Input';

const LogInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [messageSuccess, setMessageSuccess] = useState(false);

  const emailValidationRegExp =
    /^[a-zA-Z0-9.!#$%&"*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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
            value: emailValidationRegExp,
            message: 'Email is invalid!',
          },
        })}
        placeholder="Email"
        error={errors.email?.message}
      />
      <Input
        className={cn('form__input form__input--password', { error: errors.password?.message })}
        type="password"
        {...register('password', {
          required: 'Enter the password!',
        })}
        placeholder="Password"
        error={errors.password?.message}
      />
      {messageSuccess && <div className="form__message message">Successfully submitted!</div>}
      <Link to={RESTORE} replace>
        <Button className="form__forgot-password">Forgot password?</Button>
      </Link>
      <CheckBoxGroup {...register('RememberMe')} labelText="Remember me" />
      <Button>Continue</Button>
    </form>
  );
};

export default LogInForm;
