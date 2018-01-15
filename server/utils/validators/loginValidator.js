import validator from 'validator';
import isEmpty from 'lodash/isEmpty';


export default function validateInput(requests) {
 let errors = {};
  if (validator.isNull(requests.identifier)) {
    errors.identifier = 'identifier field is required';
  }
  if (validator.isNull(requests.password)) {
    errors.password = 'password field is required';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}