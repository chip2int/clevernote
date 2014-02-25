var mongoose = require('mongoose');

var BookSchema = new Schema({
  name: String,
  description: String,
  Notes: [NoteSchema],
  Owner: UserSchema
});

module.exports = mongoose.model('Book', BookSchema);
