var mongoose = require('mongoose');

var NoteSchema = new Schema({
  title: String,
  Tags: [{
    type: mongoose.schema.ObjectId,
    ref: 'Tag',
    unique: true,
    sparse: true
  }],
  body: String,
  createdOn: {type: Date, default: Date.now},
  modifiedOn: {type: Date, default: Date.now}
});


module.exports = monogose.model('Note', NoteSchema);