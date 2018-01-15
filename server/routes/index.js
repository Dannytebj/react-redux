import express from 'express';
import users from '../controllers/usersController';

const router = express.Router();

router.post('/api/v1/users', users.signUp);
router.get('/api/v1/users/:identifier', users.uniqueCheck);
router.post('/api/v1/user/auth', users.signIn);

export default router;