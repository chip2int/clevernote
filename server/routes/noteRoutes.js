var noteCtrl = require('../controllers/noteController.js');

// TODO: move this to the user controller
var userCtrl = require('../controllers/userController');

module.exports = function(app){
  
  app.get('/notes/new'            , noteCtrl.newNote);
  app.get('/notes/destroy/:note_id', noteCtrl.destroyNote );
  app.get('/notes/:note_id'        , noteCtrl.retrieveNote );
  app.post('/notes/:note_id'       , noteCtrl.updateNote );
  //TODO: move the following to to userRoutes.js
  app.get('/notes/list'           , userCtrl.listUsersNotes ); 
  
};

