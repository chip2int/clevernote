var Note = require('../models/note.js');

module.exports = {
  newNote: function(req, res) {
    var note = new Note();
    note.save();
    res.send(note);
  },
  destroyNote: function(req, res) {
    note_id = {_id: req.params.note_id};
    Note.where().findOneAndRemove(note_id, function(err) {
      console.log('error here:', err);
    });
    res.send(204);
  }, 
  retrieveNote: function(req, res) {
    note_id = {_id: req.params.note_id};
    Note.findAndReturnNoteWithTags(note_id)
    .then(function(data) {
      res.send(data);
    })
    .catch(function (error) {
      console.log('there was an error in NoteController, retrieveNote: ', error);
      res.send('error getting note', 404);
    })
    .done();
  }, 
  updateNote: function(req, res) {
    note_id = {_id: req.params.note_id};
    Note.update({_id: note_id}, req.body, function (error){
      if (error) resolve.reject();
      res.send(204);
    });
  },
  listTagsOnNote: function(req, res) {
    note_id = {_id: req.params.note_id};
  },
  addTagToNote: function(req, res) {
    note_id = {_id: req.params.note_id};
  }, 
  removeTagFromNote: function(req, res) {
    note_id = {_id: req.params.note_id};
  }

};