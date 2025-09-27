import express from 'express';
import { enrollStudent, getCoursesForStudent, getStudentsForCourse } from '../controllers/enrollment.controller.js';

const router = express.Router();

router.post('/', enrollStudent);
router.get('/student/:studentId', getCoursesForStudent);
router.get('/course/:courseId', getStudentsForCourse);

export default router;
