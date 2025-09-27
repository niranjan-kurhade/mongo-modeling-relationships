import Teacher from '../models/teacher.model.js';
import Course from '../models/course.model.js';

export const createTeacher = async (req, res) => {
	try {
		const teacher = new Teacher(req.body);
		await teacher.save();
		res.status(201).json(teacher);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

export const getTeacherWithCourses = async (req, res) => {
	try {
		const teacher = await Teacher.findById(req.params.id).lean();
		if (!teacher) return res.status(404).json({ message: 'Teacher not found' });
		const courses = await Course.find({ teacherId: teacher._id }).lean();
		res.json({ ...teacher, courses });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
