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
    // console.log(Note);
    Note.schema.methods.findAndReturnNoteWithTags(note_id)
    .then(function(data) {
      console.log('arguments in retrieveNote, ', arguments);
      res.send(data);
    })
    .catch(function (error) {
      console.log('there was an error in NoteController, retrieveNote: ', error);
      res.send('error getting note', 404);
    })
    .done();
  }, 
  updateNote: function(req, res) {
    console.log(req.body);
    if (req.body.note_id === undefined) {
      var note = new Note(req.body);
      note.save();
      console.log(note);
      req.params.note_id = note._id;

    }
    note_id = {_id: req.params.note_id};
    //TODO: this only allows us to update the Content of the note.
    // Probably should be improved to allow us to update
    // the Tags & Content @ the same time.
    Note.update({_id: note_id}, req.body, function (error){
      if (error) resolve.reject();
      res.send(204);
    });
  },
  updateTags:  function(req, res) {
    note_id = {_id: req.params.note_id};
    Note.addAndRemoveTagsFromNote({_id: note_id}, req.body, function (error){
      if (error) resolve.reject();
      res.send(204);
    });
  },
  listTagsOnNote: function(req, res) {
    note_id = {_id: req.params.note_id};
  }, 

};