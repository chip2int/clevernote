var mongoose      = require('mongoose');
mongoose.connect('mongodb://localhost/clevernote');
var models = require('./schema.js');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('db connection opened successfully');
});


/* testing curl
curl -X POST -H "Content-Type: application/json" -d '{"title": "hi", "tags": ["help", "me", "save"], "body": "longbodybodfkjsdf lkjsdflkjsdf sdflkjsdf "}' http://localhost:3500/notes/
*/

var exports = {
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
