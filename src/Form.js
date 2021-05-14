import React from 'react';
import './main.scss';

export const Form = () => {
  return(
<div className="form__card form">
  <div className="form__title">
    Log in
  </div>
  <div className="form__subtitle-wrapper">
    <div className="form__subtitle">
      Don't have an account?
    </div>
    <button type="button" className="form__sign-button">
      Sign up
      </button>
  </div>
  <div className="form__button-wrapper">
    <button type="button" className="form__button-google">
    <p className="form__button-text">Continue with Google</p>
    </button>
    <button type="button" className="form__button-microsoft">
      <p className="form__button-text--microsoft">Continue with Microsoft</p>
    </button>
  </div>
  <div className="form__middle-wrapper">
    <div className="form__decoration"></div>
    <div className="form__middle-paragraph">or</div>
  </div>
</div>
  );
}
