var User = require('../models/user.js'),
    Note = require('../models/note.js'),
    Tag  = require('../models/tag.js'),
    Book  = require('../models/book.js'),
    Q = require('q');

module.exports = {
  listAllNotes: function(req,res){ 
    // get titles, tags, ids of all notes
    var defer = Q.defer();

    User.findUserNotebooks()
    .then(populateNotebooksWithNotes)
    .then(populateNotesWithTags)
    .then(function(data){
      defer.resolve(data);
    })
    .catch(function (error) {
      console.log("there was an error in listAllNotes: ", error);
    })
    .done();
    res.send(defer.promise);
  },


};
