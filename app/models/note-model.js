import mongoose, { Schema } from 'mongoose';

// create a schema for posts with a field
const noteSchema = new Schema({
  title: String,
  x: Number,
  y: Number,
  zIndex: Number,
  text: String,
});

// create model class
const NoteModel = mongoose.model('Post', noteSchema);

export default NoteModel;
