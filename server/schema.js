var mongoose = require('mongoose');
var Schema = mongoose.Schema;

models = {};

var NoteSchema = new Schema({
  title: String,
  tags: [String],
  body: String,
  createdOn: {type: Date, default: Date.now},
  modifiedOn: {type: Date, default: Date.now}
});

var UserSchema = new Schema({
  id: Number,
  name: String,
  privateKey: String,
  publicKey: String
});

models.Note = mongoose.model('Note', NoteSchema);
models.User = mongoose.model('User', UserSchema);

module.exports = models;