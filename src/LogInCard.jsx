import React from 'react';
import Form from './Form';
import './main.scss';

const LogInCard = () => (
  <div className="card">
    <div className="card__title">Log in</div>
    <div className="card__subtitle-wrapper">
      <div className="card__subtitle">Dont have an account?</div>
      <button type="button" className="card__sign-button">
        Sign up
      </button>
    </div>
    <div className="card__button-wrapper">
      <button type="button" className="card__button-google">
        Continue with Google
      </button>
      <button type="button" className="card__button-microsoft">
        Continue with Microsoft
      </button>
    </div>
    <hr className="card__decoration" />
    <div className="card__middle-paragraph">or</div>
    <Form />
  </div>
);

export default LogInCard;
