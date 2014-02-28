var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  _id : Number,
  name: String,
  privateKey: String,
  publicKey : String, 
  books: [{
    type: Schema.Types.ObjectId,
    ref : 'Book'
  }]
});

UserSchema.set('toObject', { getters: true });

module.export(mongoose.model('User', UserSchema));

UserSchema.methods.findUserNotebooks = function(data) {
  // body...
};

