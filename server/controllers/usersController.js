import validateInput from '../utils/validators/SignUpValidator';

exports.signUp = (req, res) => {
  const { errors, isValid } = validateInput(req.body);
  if (!isValid) {
    res.status(400).json({ errors });
  }
  console.log(req.body, 'You are here!!!');
};
