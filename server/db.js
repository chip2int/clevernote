
var models = require('./schema.js');


var exports = {
  noteList: function(req, res) {
    // get titles, tags, ids of all notes

    models.Note.find(function(err, notes){
      if (err) console.log("Error in getNoteList: ", err);
      res.send(notes);
    });
  },
  save: function(req, res){
    var note = req.body;
    var saveme = new models.Note({
      title: note.title,
      tags: note.tags,
      body: note.body
    });
    saveme.save(function(err, noted) {
      if (err) throw console.log('big err: ',err);
      res.send('saving this blob: ', noted);
    });
  },
  retrieve: function(req, res){
    // console.log(req.params.noteId);

    models.Note.find({_id: req.params.noteId }, function(err, note) {
      if (err) throw console.log('big err: ',err);
      console.log('sending blog: ' ,note);
      res.send(note);
    });
  }, 
  destroy: function(req, res) {
    // permamently removes the note

    models.Note.findById(req.params.noteId, function(err, note){
      note.remove( function(err, note) {
        if (err) throw console.log('err in destroy: ', err);
        console.log('destroying note: ', note);      
        res.send('removed');
        
      });
    });
  }
};

module.exports = exports;

