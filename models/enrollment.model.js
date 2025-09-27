import mongoose from 'mongoose';

const enrollmentSchema = new mongoose.Schema({
	studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true, index: true },
	courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true, index: true },
});

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

export default Enrollment;
