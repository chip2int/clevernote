var Tag  = require('../models/tag.js'),
    // Note = require('../models/note.js'),
    // Book  = require('../models/book.js'),
    // User = require('../models/user.js'),
    Q = require('q');

module.exports = {
  listUsersNotes: function(req,res){ 
    // return titles, tags, ids of all notes
    var defer = Q.defer();

    User.findUserNotebooks({})
    .then(Book.getTitlesOfNotes)
    .then(Note.populateNoteWithTags)
    .then(function(data){
      defer.resolve(data);
    })
    .catch(function (error) {
      console.log("there was an error in listAllNotes: ", error);
      defer.reject(error);
    })
    .done();
    res.send(defer.promise);
  }
};
