import cn from 'classnames';
import React from 'react';
import '@styles/main.scss';
import { useForm } from 'react-hook-form';
import Button from './InteractiveParts/Button';
import Input from './InteractiveParts/Input';
import CheckBoxGroup from './InteractiveParts/CheckBoxGroup';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Input
        className={cn('form__input form__input--email')}
        type="text"
        {...register('email', {
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&"*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: 'Email is invalid!',
          },
        })}
        placeholder="Email"
        error={errors.email?.message}
      />
      <Input
        className={cn('form__input form__input--password')}
        type="password"
        {...register('password', {
          required: 'Enter the password!',
        })}
        placeholder="Password"
        error={errors.password?.message}
      />
      <Button className="form__forgot-password">Forgot password?</Button>
      <CheckBoxGroup {...register('RememberMe')} labelText="Remember me" />
      <Button>Continue</Button>
    </form>
  );
};

export default Form;
