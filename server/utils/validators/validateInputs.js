import User from '../../models/user';
import isEmpty from 'lodash/isEmpty';

function validateInput(data, otherValidations) {
  let { errors } = otherValidations(data);
  return Promise.all([
    User.where({ email: data.email }).fetch().then(user => {
      if (user) {
        errors.email = 'A user with this email already exist';
      }
    }),
    User.where({ username: data.username }).fetch().then(user => {
      if (user) {
        errors.username = 'A user with this username already exist';
      }
    })
  ]).then(() => {
    return {
      errors,
      isValid: isEmpty(errors)
    };
  });
};
export default validateInput;