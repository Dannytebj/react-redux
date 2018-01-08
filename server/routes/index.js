import express from 'express';
import users from '../controllers/usersController';

const router = express.Router();

router.post('/api/v1/users', users.signUp);

export default router;