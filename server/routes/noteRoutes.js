var noteController = require('../controllers/noteController.js');

// TODO: move this to the user controller
var userCtrl = require('../controllers/userController');

module.exports = function(app){
  
  app.get('/notes/destroy/:noteId', noteController.destroyNote );
  app.get('/notes/:noteId'        , noteController.retrieveNote );
  app.post('/notes/:noteId'              , noteController.updateNote );
  
  //TODO: move the following to to userRoutes.js
  app.get('/notes/list'           , userCtrl.listUsersNotes ); 
  
};

