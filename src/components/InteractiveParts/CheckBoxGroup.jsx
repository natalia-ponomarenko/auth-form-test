import React from 'react';
import '@styles/main.scss';
import PropTypes from 'prop-types';
import check from '@images/check.svg';

const CheckboxGroup = ({ name, checked, onChange, labelText }) => {
  return (
    <>
      <div className="form__input-group">
        <label htmlFor={name} className="form__label">
          <input
            type="checkbox"
            id={name}
            name={name}
            checked={checked}
            onChange={onChange}
            className="form__checkmark"
          />
          <div className="form__container">
            <img src={check} alt="checkmark" className="form__icon" />
          </div>
          {labelText}
        </label>
      </div>
    </>
  );
};

export default CheckboxGroup;

CheckboxGroup.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  labelText: PropTypes.string.isRequired,
};

CheckboxGroup.defaultProps = {
  onChange: () => {},
};
