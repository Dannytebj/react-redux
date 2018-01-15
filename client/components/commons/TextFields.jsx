import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextFields = ({ field, error, value, onChange, type, label, placeholder, id, checkUserExists }) => {
  return (
    <div className="form-group">
      <label htmlFor="username">{label}</label>
      <input
        type={type}
        onBlur={checkUserExists}
        className={classnames("form-control", { 'has-error': error })}
        id={id}
        name={field}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <small className="form-text text-muted">{error}</small>}
    </div>
  )
}
TextFields.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  checkUserExists: PropTypes.func
}
TextFields.defaultProps = {
  type: 'text'
}
export default TextFields;