var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema,
    Q           = require('q');

var NoteSchema  = new Schema({
  title: String,
  _owner: {type: Schema.Types.ObjectId, ref: 'User'},
  _book: {type: Schema.Types.ObjectId, ref: 'Book'},
  Tags: [{
    type  : Number,
    ref   : 'Tag',
    unique: true,
    sparse: true
  }],
  body: String,
  createdOn: {type: Date, default: Date.now},
  modifiedOn: {type: Date, default: Date.now}
});


NoteSchema.methods.findAndReturnNoteWithTags = function(data) {
  var defer = Q.defer();
  var Note = mongoose.model('Note', NoteSchema),
      options = {
        path   : 'Tags',
        // select : 'name'
      };
  console.log('findAndReturnNoteWithTags: ');
  
  Note.findOne(data)
  .populate(options)
  .exec(function (err, note) {
    console.log('arguments  ', arguments);

    defer.resolve(note);
  });
  return defer.promise;
};

NoteSchema.methods.addAndRemoveTagsFromNote = function (data) {
  var defer = Q.defer();
  var Note = mongoose.model('Note', NoteSchema),
      options = {
        path   : 'Tags',
        select : 'name'
      };
  return defer.promise;
};

// NoteSchema.methods.populateNoteWithTags = function(data) {
//   var defer = Q.defer();
//   var Note = mongoose.model('Note', NoteSchema);
  
//   console.log(data);
//   data
//   .populate(options)
//   .exec(function (err, note) {
//     console.log('arguments in populateNoteWithTags ', arguments);

//     defer.resolve(note);
//   });
//   return defer.promise;
// }; 

module.exports = mongoose.model('Note', NoteSchema);
