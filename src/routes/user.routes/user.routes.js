import express from 'express';
import { create } from '../../controls/user.control.js';

const router = express.Router();

router.post('/users', create)

// router.get('/users', list)
// router.get('/update/:id', single-User)

// router.put('/update/:id', upDateUser)
// router.delete('/update/:id', del-User)


export default router;