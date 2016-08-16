import Note from '../models/note-model';


export const createNote = (fields) => {
  const note = new Note(fields);
  return note.save();
};

export const getNotes = () => {
  return Note.find({}).then(notes => {
    return notes.reduce((result, item) => {
      result[item.id] = item;
      return result;
    }, {});
  });
};

export const deleteNote = (id) => {
  // to quote Prof. Cormen: left as an exercise to the reader
  // remember to return the mongoose function you use rather than just delete
  return Note.findByIdAndRemove(id);
};

export const updateNote = (id, fields, done) => {
  // update the note and return the top level mongoose function you used, such as return Note.findById...
  return Note.findById(id)
  .then(post => {
    if (fields.title) {
      Note.title = fields.title;
    }
    if (fields.x) {
      post.x = fields.x;
    }
    if (fields.y) {
      post.y = fields.y;
    }
    if (fields.zIndex) {
      post.zIndex = fields.zIndex;
    }
    if (fields.text) {
      post.text = fields.text;
    }
    return Note.save();
  });
};
