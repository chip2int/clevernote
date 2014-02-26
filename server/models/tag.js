var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TagSchema = new Schema({
  id: Number,
  name: {
    type: String,
    unique: true
  },
  notes: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Note'
  }], 

});

TagSchema.set('toObject', { getters: true });

module.exports = mongoose.model('Tag', TagSchema);

TagSchema.methods.updateTagName = function(data) {
    // body...
};  

TagSchema.methods.deleteTag = function(data) {
    // body...
};  

TagSchema.methods.searchForNotesByTagName = function(data) {
    // body...
};  