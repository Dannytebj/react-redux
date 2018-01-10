import validateInput from '../utils/validators/SignUpValidator';

exports.signUp = (req, res) => {
  const { errors, isValid } = validateInput(req.body);
  if (!isValid) {
    res.status(400).json({ errors });
  } else {
    res.status(201).send({ message: 'Successful!' })
  }
};
