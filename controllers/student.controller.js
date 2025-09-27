import Student from '../models/student.model.js';
import Profile from '../models/profile.model.js';

export const createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const createProfile = async (req, res) => {
  try {
    const { studentId, bio, hobbies } = req.body;
    const student = await Student.findById(studentId);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    const existing = await Profile.findOne({ studentId });
    if (existing) return res.status(400).json({ message: 'Profile already exists for this student' });
    const profile = new Profile({ studentId, bio, hobbies });
    await profile.save();
    res.status(201).json(profile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getStudentWithProfile = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).lean();
    if (!student) return res.status(404).json({ message: 'Student not found' });
    const profile = await Profile.findOne({ studentId: student._id }).lean();
    res.json({ ...student, profile });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
