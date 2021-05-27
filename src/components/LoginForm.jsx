import cn from 'classnames';
import { React, useRef, useState } from 'react';
import '@styles/main.scss';
import Button from './InteractiveParts/Button';
import Input from './InteractiveParts/Input';
import CheckBoxGroup from './InteractiveParts/CheckBoxGroup';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleInputChange = (event, callback) => {
    const { value } = event.target;
    callback(value);
    setEmailError(false);
    setPasswordError(false);
  };

  const handleCheckBoxChange = (event) => {
    const { checked } = event.target;
    setRememberMe(checked);
  };

  const personalToken = (userEmail, userPassword, userRememberMe) => ({
    email: userEmail,
    password: userPassword,
    remember: userRememberMe,
  });

  const validateInput = () => {
    const validRegex = /^[a-zA-Z0-9.!#$%&"*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(validRegex) || !email) {
      setEmailError(true);
      emailRef.current.focus();
      return false;
    }
    if (!password) {
      setPasswordError(true);
      passwordRef.current.focus();
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateInput();
    if (isValid) {
      personalToken(email, password, rememberMe);
      setEmail('');
      setPassword('');
      setRememberMe(false);
      setEmailError(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        className={cn('form__input form__input--email', { error: emailError })}
        type="text"
        nameOfInput="email"
        placeholder="Email"
        value={email}
        onChange={(event) => handleInputChange(event, setEmail)}
        ref={emailRef}
        error={emailError}
      />
      <Input
        className={cn('form__input form__input--password', { error: passwordError })}
        type="text"
        nameOfInput="password"
        placeholder="Password"
        value={password}
        onChange={(event) => handleInputChange(event, setPassword)}
        ref={passwordRef}
        error={passwordError}
      />
      <Button className="form__forgot-password">Forgot password?</Button>
      <CheckBoxGroup
        name="RememberMe"
        checked={rememberMe}
        onChange={handleCheckBoxChange}
        labelText="Remember me"
      />
      <Button className="form__button">Continue</Button>
    </form>
  );
};

export default Form;
