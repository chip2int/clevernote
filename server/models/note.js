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


NoteSchema.method('findAndReturnNoteWithTags', function(data) {
  var defer = Q.defer();
  console.log('findAndReturnNoteWithTags: ');
  var note = Note.findById(data)
  .exec(function (err, note) {
    console.log(note);
    note.populateNoteWithTags();
    defer.resolve(note);
  });
  return defer.promise;
});

NoteSchema.method('populateNoteWithTags',function(data) {
  var defer = Q.defer();
  this.populate('Tags','Tags')
  .exec(function (err, note) {
    console.log(note);
    defer.resolve(note);
  });
  return defer.promise;
}); 

module.exports = mongoose.model('Note', NoteSchema);
