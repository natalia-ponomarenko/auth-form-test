import { React, useState, useRef } from 'react';
import './main.scss';

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

  const personalToken = (userEmail, userPassword, userRememberMe) => (
    {
      email: userEmail,
      password: userPassword,
      remember: userRememberMe,
    }
  );

  const validateInput = () => {
    const validRegex = /^[a-zA-Z0-9.!#$%&"*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(validRegex) || !email) {
      setEmailError(true);
      emailRef.current.focus();
      return false;
    } if (!password) {
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
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      <input
        className="form__input form__input--email"
        type="text"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(event) => handleInputChange(event, setEmail)}
        ref={emailRef}
      />
      {emailError && (
        <div className="form__error">
          Email is invalid!
        </div>
      )}
      <input
        className="form__input form__input--password"
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(event) => handleInputChange(event, setPassword)}
        ref={passwordRef}
      />
      {passwordError && (
        <div className="form__error">
          Enter the password!
        </div>
      )}
      <button type="button" className="form__forgot-password">
        Forgot password?
      </button>
      <label htmlFor="rememberMe" className="form__checkbox">
        <input
          type="checkbox"
          id="rememberMe"
          name="rememberMe"
          checked={rememberMe}
          onChange={handleCheckBoxChange}
          className="form__checkmark"
        />
        Remember me
      </label>
      <button
        type="submit"
        className="form__button"
      >
        Continue
      </button>
    </form>
  );
};

export default Form;
