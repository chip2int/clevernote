var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Q = require('q');

var TagSchema = new Schema({
  _id : Number,
  name: {
    type: String,
    unique: true
  },
  notes: [{
    type: Schema.Types.ObjectId,
    ref : 'Note'
  }], 

});

TagSchema.methods.updateTagName = function(data) {
    // body...
};  

TagSchema.methods.deleteTag = function(data) {
    // body...
};  

TagSchema.methods.searchForNotesByTagName = function(data) {
    // body...
};  

TagSchema.methods.findOrCreateByName = function(data) {
  var defer = Q.defer();
  var Tag = mongoose.model('Tag', TagSchema),
      conditions = { name: data }, 
      update = { name: data }, 
      options = {
        new   : true,
        upsert: true,

      };

  Tag.findOneAndUpdate(conditions, update, options, function (err, newTag) {
    if (err) defer.reject(err);
    Tag.populate(newTag, 'notes', function (err, result) {
      if (err) defer.reject(err);
      defer.resolve(result);
    });
  });

  return defer.promise;
};

TagSchema.set('toObject', { getters: true });

module.exports = mongoose.model('Tag', TagSchema);
