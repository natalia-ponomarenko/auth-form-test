import {React, useState } from 'react';
import './main.scss';

export const Form = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ rememberMe, setRememberMe ] = useState(false);
  const [ emailError, setEmailError ] = useState(false);

  const handleInputChange = (event, callback) => {
    const { value } = event.target;
    callback(value);
  }

  const handleCheckBoxChange = (event) => {
    const { checked } = event.target;
    setRememberMe(checked);
  }

  const personalToken = (email, password, rememberMe) => (
      {
        "email": email,
        "password": password,
        'remember': rememberMe,
      }
  );

  const validateInput = () => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.match(validRegex)) {
      setEmailError(true);
      return false;
    }
    return true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateInput();
    if(isValid) {
      const userToken = personalToken(email, password, rememberMe);
      setEmail('');
      setPassword('');
      setRememberMe(false);
      setEmailError(false);
      console.log(userToken);
    }
  }

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
        onChange={event => handleInputChange(event, setEmail)}
        required
      />
        {emailError &&
          <div className="form__error">
            Email is invalid!
          </div>
        }
      <input
        className="form__input form__input--password"
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={event => handleInputChange(event, setPassword)}
        required
      />
      <div className="form__forgot-password">Forgot password?</div>
      <div className="form__checkbox">
        <input
          type="checkbox"
          id="rememberMe"
          name="rememberMe"
          checked={rememberMe}
          onChange={handleCheckBoxChange}
          className="form__checkmark"
        />
        <label htmlFor="rememberMe">
          Remember me
        </label>
      </div>
      <button
        type="submit"
        className="form__button"
      >
        Continue
      </button>
  </form>
  );
}