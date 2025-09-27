import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String },
	teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true },
});

const Course = mongoose.model('Course', courseSchema);

export default Course;
