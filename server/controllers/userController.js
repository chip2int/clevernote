var User = require('../models/user.js'),
    Note = require('../models/note.js'),
    Tag  = require('../models/tag.js'),
    Book  = require('../models/book.js'),
    Q = require('q');

module.exports = {
  listAllNotes: function(req,res){ // get titles, tags, ids of all notes
    var defer = Q.defer();
    models.Note.find({})
    .populate('Tags', 'Tag')
    .exec(function (err, notes) {
      if (err) console.log("Error in listAllNotes: ", err);
      defer.resolve(notes);
    });
    res.send(defer.promise);
  }
};
