var Tag = require('../models/tag.js');

module.exports = {
  search: function(req, res) {
    // body...
  },
  listAll: function(req, res) {
    // body...
  },
  createNewTag: function(req, res) {
    Tag.schema.methods.findOrCreateByName(req.params.tag_name)
    .then(function (data) {
      res.send(data);
    })
    .catch(function (error) {
      console.log('there was an error in tagController, createNewTag: ', error);
      res.send('error creating tag', 404);
    })
    .done();
  }
};