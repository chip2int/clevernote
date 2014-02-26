var tagCtrl = require('../controllers/tagController.js');

// TODO: are there any routes the tags will need? 

module.exports = function(app){
  
  app.get('/tags/search/:query', tagCtrl.search       );
  app.get('/tags/all',           tagCtrl.listAll      );
  app.get('/tag/:tag_name',      tagCtrl.createNewTag );
  
};
