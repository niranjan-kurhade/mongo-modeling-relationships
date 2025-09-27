import Enrollment from '../models/enrollment.model.js';
import Course from '../models/course.model.js';
import Student from '../models/student.model.js';

export const enrollStudent = async (req, res) => {
	try {
		const { studentId, courseId } = req.body;
		const exists = await Enrollment.findOne({ studentId, courseId });
		if (exists) return res.status(400).json({ message: 'Already enrolled' });
		const enrollment = new Enrollment({ studentId, courseId });
		await enrollment.save();
		res.status(201).json(enrollment);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

export const getCoursesForStudent = async (req, res) => {
	try {
		const enrollments = await Enrollment.find({ studentId: req.params.studentId }).lean();
		const courseIds = enrollments.map(e => e.courseId);
		const courses = await Course.find({ _id: { $in: courseIds } }).lean();
		res.json(courses);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export const getStudentsForCourse = async (req, res) => {
	try {
		const enrollments = await Enrollment.find({ courseId: req.params.courseId }).lean();
		const studentIds = enrollments.map(e => e.studentId);
		const students = await Student.find({ _id: { $in: studentIds } }).lean();
		res.json(students);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
