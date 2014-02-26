// specific test database, and we'll wipe it after every test //
var MONGODB_URL = process.env.MONGODB_URL || 
      'mongodb://localhost/testernote',
    clearDbAfterTests = true; // this isn't being used yet, but should

var expect   = require('chai').expect,
    assert   = require('assert'),
    request = require('request'),
    mongoose = require('mongoose'),
    db       = require('../server/db.js'),
    Dummy    = mongoose.model('Dummy', new mongoose.Schema({a:Number})),
    clearDB  = require('mocha-mongoose')(MONGODB_URL),
    app      = require('../server/app.js');


var mongo;

/* DB tests */
describe('#DB', function (){
  var models = require('../server/schema.js'),
    note1 = {title: "n1", tags: ["note", "1", "tag"], body: "note 1 is this"},
    note2 = {title: "n2", tags: ["note", "2", "tag"], body: "note 2 is this"},
    note3 = {title: "n3", tags: ["note", "3", "tag"], body: "note 3 is this"};
  
  beforeEach(function (done){
    // if (mongoose.connection.db) return done();
    
    mongo = mongoose.connect(MONGODB_URL);
    // clearDB(done);
    done();
  });
  describe('schemas', function (){
    it('should save notes without error',function (done){
      models.Note.create([note1, note2, note3], done);
    });

    it('should retrieve a note when requested by ID#',function (done){
      var promise = Dummy.create({a: 1});
      promise.then(function (dummy) {
        Dummy.findById(dummy._id, function (err, found){
          assert.equal(found.a,1);
          done();
        });
      });
    });
  });

  describe('API functions', function (){
    clearDB(function (done) {
      models.Note.create([note1, note2, note3],done);
    });
    beforeEach(function () {      
      
    });
  // GET /properties
    describe('GET /notes/list', function () {
      it('should respond with status 200', function (done) {
        request('http://localhost/notes/list', function (err, resp) {
          console.log(arguments);
          assert.equal(resp.statusCode, 200);
          done();
        });
      });
    });
  
    // it('should return a list of all notes',function (done){
      
    //   db.noteList();
    //   done();
    // });
    // it('should destroy all notes',function (done){
    //   done();
    // });
    
  });
  // after(); /* We should now drop the testing DB */

});


/*

curl --insecure -X GET -H "Content-Type: application/json"  https://localhost:3030/notes/new

test save: 
curl --insecure -X POST -H "Content-Type: application/json" -d '{"title": "hi", "tags": ["help", "me", "save"], "body": "longbodybodfkjsdf lkjsdflkjsdf sdflkjsdf "}' https://localhost:3030/notes/
testring destroy: 
curl --insecure -X GET  https://localhost:3030/notes/destroy/53046abcf5df756927fd01ac
test getNoteList: 
curl --insecure -X GET  https://localhost:3030/notes/list
test retrieve: 
curl --insecure -X GET  https://localhost:3030/notes/52f5e3a2efa5d2c5b57c76b4

*/
