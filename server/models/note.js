var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema,
    Q           = require('q');

var NoteSchema  = new Schema({
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

NoteSchema.methods.createNote = function(data) {
  var defer = Q.defer();
    console.log('note ');
  
  var note = new mongoose.model('Note');
  note.save(function (error, note) {
    console.log('note made', note);
    console.log('arguments', arguments);
    if (error) defer.reject();
    defer.resolve(note);
  });

  return defer.promise;
};