var noteController = require('../controllers/noteController.js');

app.get('/notes/destroy/:noteId', noteController.destroy );
app.get('/notes/list'           , noteController.noteList );
app.get('/notes/:noteId'        , noteController.retrieve );
app.post('/notes/'              , noteController.save );
