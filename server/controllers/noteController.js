var Note = require('../models/note.js');

module.exports = {
  retrieveNote: function(req, res) {
    // get note by Id & return note
    Note.findById({});

    res.send(defer.resolve(foundNote));
  }, 
  updateNote: function(req, res) {
    // body...
  },
  destroyNote: function(req, res) {
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