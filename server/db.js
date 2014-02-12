var mongoose      = require('mongoose');
mongoose.connect('mongodb://localhost/clevernote');
var models = require('./schema.js');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('db connection opened successfully');
});


/* testing curl
test save: 
curl -X POST -H "Content-Type: application/json" -d '{"title": "hi", "tags": ["help", "me", "save"], "body": "longbodybodfkjsdf lkjsdflkjsdf sdflkjsdf "}' http://localhost:3500/notes/

test getNoteList: 
curl -X GET  http://localhost:3500/notes/list

test retrieve: 
curl -X GET  http://localhost:3500/notes/52f5e3a2efa5d2c5b57c76b4
*/

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
  }

};

module.exports = exports;
