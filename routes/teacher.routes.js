import express from 'express';
import { createTeacher, getTeacherWithCourses } from '../controllers/teacher.controller.js';

const router = express.Router();

router.post('/', createTeacher);
router.get('/:id/courses', getTeacherWithCourses);

export default router;
