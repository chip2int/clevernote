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

module.export(mongoose.model('Tag', TagSchema));
