import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  bio: { type: String },
  hobbies: { type: [String] },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
});

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;