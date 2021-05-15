import React from 'react';
import { Form } from './Form';
import './main.scss';

export const LogInCard = () => {
  return(
    <div className="card">
      <div className="card__title">
        Log in
      </div>
      <div className="card__subtitle-wrapper">
        <div className="card__subtitle">
          Don't have an account?
        </div>
        <button type="button" className="card__sign-button">
          Sign up
        </button>
      </div>
      <div className="card__button-wrapper">
        <button type="button" className="card__button-google">
          <p className="card__button-text">Continue with Google</p>
        </button>
        <button type="button" className="card__button-microsoft">
          <p className="card__button-text--microsoft">Continue with Microsoft</p>
        </button>
      </div>
        <hr className="card__decoration"/>
        <div className="card__middle-paragraph">or</div>
        <Form />
    </div>
  );
}
