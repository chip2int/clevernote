var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  name: String,
  description: String,
  Notes: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Note'
  }],
  Owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Book', BookSchema);

BookSchema.methods.getTitlesOfNotes = function(data) {
  // given books, populate titles of each note in book
  var defer = Q.defer();
  var options = {path: 'Notes'};
  var books = data.books;
  Book.populate(books, options, function(err,doc){
    if (err) defer.reject(err);
    //TODO: needs to add doc to data??
    defer.resolve(doc);
  });

  return defer.promise;
};

BookSchema.methods.listNotes = function(data) {
  // body...
};

BookSchema.methods.populateNotebooksWithNotes = function(data) {
  // body...
};
