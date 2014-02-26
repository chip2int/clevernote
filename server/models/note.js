var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NoteSchema = new Schema({
  title: String,
  Tags: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Tag',
    unique: true,
    sparse: true
  }],
  body: String,
  createdOn: {type: Date, default: Date.now},
  modifiedOn: {type: Date, default: Date.now}
});


module.exports = mongoose.model('Note', NoteSchema);

NoteSchema.methods.populateNoteWithTags = function(data) {
  // body...
};