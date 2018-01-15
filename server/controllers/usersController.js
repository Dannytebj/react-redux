import bcrypt from 'bcrypt';
import commonValidations from '../utils/validators/SignUpValidator';
import validateInput from '../utils/validators/validateInputs';
import User from '../models/user';


exports.signUp = (req, res) => {
  validateInput(req.body, commonValidations)
    .then(({ errors, isValid }) => {
      if (isValid) {
        const { username, password, timezone, email } = req.body
        const password_digest = bcrypt.hashSync(password, 10);
        User.forge({
          username, timezone, email, password_digest
        }, { hasTimestamps: true }).save()
          .then(user =>
            res.status(201).send({ message: 'Successful!', user })
          )
          .catch(error =>
            res.status(500).json({ error })
          );
      } else {
        res.status(400).json({ errors });
      }
    })
};

exports.uniqueCheck = (req, res) => {
  User.query({
    select: ['username', 'email'],
    where: { email: req.params.identifier },
    orWhere: {username: req.params.identifier }
  }).fetch().then(user => {
    res.json({ user });
  });
}
