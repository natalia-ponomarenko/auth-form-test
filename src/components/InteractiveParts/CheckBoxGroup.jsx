import React, { forwardRef } from 'react';
import '@styles/main.scss';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

const defaultProps = {
  onChange: () => {},
};

const CheckboxGroup = forwardRef(({ name, labelText, ...props }, ref) => (
  <div className="form__input-group">
    <label htmlFor={name} className="form__label">
      <input
        {...props}
        type="checkbox"
        id={name}
        name={name}
        className="form__checkmark"
        ref={ref}
      />
      {labelText}
    </label>
  </div>
));

CheckboxGroup.propTypes = propTypes;
CheckboxGroup.defaultProps = defaultProps;

export default CheckboxGroup;
