import mongoose from 'mongoose';

const voterSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  state: { type: String, required: true, trim: true },
  mobile: { type: String, required: true, unique: true, trim: true },
  email: { type: String, match: /.+\@.+\..+/, lowercase: true, trim: true },
  voterId: { type: String, required: true, unique: true },
}, { timestamps: true });

export default mongoose.model('Voter', voterSchema);
