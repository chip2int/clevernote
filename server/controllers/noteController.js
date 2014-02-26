var Note = require('../models/note.js');

module.exports = {
  newNote: function(req, res) {
    var note = new Note();
    note.save();
    res.send(note);
  },
  destroyNote: function(req, res) {
    console.log('params',req.params.note_id);
    Note.where().findOneAndRemove({_id: req.params.note_id}, function(err) {
      console.log('error here:', err);
    });
    res.send(200);
  }, 
  retrieveNote: function(req, res) {
    // get note by Id & return note
    // Note.findById({});

    // res.send();
  }, 
  updateNote: function(req, res) {
    // body...
  },
  listTagsOnNote: function(req, res) {
    // body...
  },
  addTagToNote: function(req, res) {
    // body...
  }, 
  removeTagFromNote: function(req, res) {
    // body...
  }

};