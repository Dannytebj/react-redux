import bcrypt from 'bcrypt';
import validateInput from '../utils/validators/SignUpValidator';
import User from '../models/user';

exports.signUp = (req, res) => {
  const { errors, isValid } = validateInput(req.body);
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
};
