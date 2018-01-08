import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

function ValidateInput (requests) {
let errors = {};
if (validator.isNull(requests.email)) {
   errors.email = 'email field is required';
}
if (validator.isNull(requests.password)) {
   errors.password = 'password field is required';
}
if (validator.isNull(requests.username)) {
   errors.username = 'username field is required';
}
if (validator.isNull(requests.confirmPassword)) {
   errors.confirmPassword = 'confirmPassword field is required';
}
if (!validator.equals(requests.password,requests.confirmPassword)) {
   errors.confirmPassword = 'Passwords must match';
}
if (validator.isNull(requests.timezone)){
  errors.timezone = 'timezone field is required'
}
return {
  errors,
  isValid: isEmpty(errors) 
}
}

export default ValidateInput;
