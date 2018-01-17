import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/user';

dotenv.load();
export default (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  let token;
  if (authorizationHeader) {
    token = authorizationHeader.split(' ')[1];
  }
  if (token) {
    jwt.verify(token, process.env.SECRET, (error, decoded) => {
      if (error) {
        res.status(401).json({
          error: 'Failed to authenticate'
        });
      } else {
        User.query({
          where: { id: decoded.id },
          select: ['id', 'email', 'username']
        }).fetch().then((user) => {
          if (!user) {
            res.status(404).json({ error: 'No such user' });
          } else {
            req.currentUser = user;
            next();
          }
        });
      }
    });
  } else {
    res.status(403).json({
      message: 'Not authorized'
    });
  }
};
