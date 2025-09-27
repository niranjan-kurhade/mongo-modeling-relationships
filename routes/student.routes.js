import express from 'express';
import { createStudent, createProfile, getStudentWithProfile } from '../controllers/student.controller.js';

const router = express.Router();

router.post('/', createStudent);
router.post('/profile', createProfile);
router.get('/:id/profile', getStudentWithProfile);

export default router;
