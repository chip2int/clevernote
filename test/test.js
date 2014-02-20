var expect   = require('chai').expect,
    assert   = require('assert'),
    mongoose = require('mongoose'),
    db       = require('../server/db.js');


// specific test database, and we'll wipe it after every test //
var MONGODB_URL = process.env.MONGODB_URL || 
      'mongodb://localhost/testernote',
    clearDbAfterTests = true; // this isn't being used yet, but should

/* DB tests */
describe('#DB', function(){

  mongoose.connect(MONGODB_URL);
  var mongo = mongoose.connection;
  mongo.on('error', console.error.bind(console, 'connection error:'));
  mongo.once('open', function(){
    console.log('mongo connection opened successfully');
  });
  beforeEach(function(){
    mongo.clear();
  });
  describe('schema functions', function(){
    var models = require('../server/schema.js'),
     note1 = new models.Note ({title: "n1", tags: ["note", "1", "tag"], body: "note 1 is this"}),
     note2 = new models.Note ({title: "n2", tags: ["note", "2", "tag"], body: "note 2 is this"}),
     note3 = new models.Note ({title: "n3", tags: ["note", "3", "tag"], body: "note 3 is this"});
    
    it('should save notes without error',function(done){
      note1.save(done);
        // test save: 
        // curl --insecure -X POST -H "Content-Type: application/json" -d '{"title": "hi", "tags": ["help", "me", "save"], "body": "longbodybodfkjsdf lkjsdflkjsdf sdflkjsdf "}' https://localhost:3030/notes/
    });

    it('should retrieve a note when requested by ID#',function(){});
        // test retrieve: 
        // curl --insecure -X GET  https://localhost:3030/notes/52f5e3a2efa5d2c5b57c76b4
    it('should return a list of all notes',function(){});
        // test getNoteList: 
        // curl --insecure -X GET  https://localhost:3030/notes/list
    it('should destroy all notes',function(){});
        // testring destroy: 
        // curl --insecure -X GET  https://localhost:3030/notes/destroy/53046abcf5df756927fd01ac
  });
  // after(); /* We should now drop the testing DB */

});