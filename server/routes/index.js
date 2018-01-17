import express from 'express';
import users from '../controllers/usersController';
import authenticate from '../middleware/authenticate';

const router = express.Router();

router.post('/api/v1/users', users.signUp);
router.get('/api/v1/users/:identifier', users.uniqueCheck);
router.post('/api/v1/user/auth', users.signIn);
router.post('/api/v1/events', authenticate, users.createEvent);

export default router;
