import React from 'react';
import './main.scss';

export const Form = () => {
  return (
    <form className="form">
    <input
      className="form__input form__input--email"
      type="text"
      name="email"
      placeholder="Email"
      // value={this.state.title}
      // onChange={this.handleInputChange}
      required
    />

    <input
      className="form__input form__input--password"
      type="password"
      name="password"
      placeholder="Password"
      // value={this.state.imgUrl}
      // onChange={this.handleInputChange}
      required
    />
    <div className="form__forgot-password">Forgot password?</div>
    <div className="form__checkbox">
      <input type="checkbox" id="remember" name="remember" className="form__checkmark"/>
      <label htmlFor="remember">Remember me</label>
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