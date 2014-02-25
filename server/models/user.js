var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  id: Number,
  name: String,
  privateKey: String,
  publicKey: String, 
  books: [BookSchema]
});

UserSchema.set('toObject', { getters: true });

module.export(mongoose.model('User', UserSchema));