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
curl -X GET  http://localhost:3500/notes/
*/

var exports = {
  getNoteList: function(req, res) {
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
    console.log(req.params.noteId);
    models.Note.find(function(err, note) {
      if (err) throw console.log('big err: ',err);
      res.send('saving this blob: ', note);
    });
    res.send('getting hi: ',req.params.noteId );
  }

};

module.exports = exports;
