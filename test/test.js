var expect = require('chai').expect;
var express = require('express');
var https   = require('https');
var http   = require('http');

var path    = require('path');
var app     = express(),
    httpApp = express();
// var db      = require('../server/db.js');
var mongoose      = require('mongoose');
var MONGODB_URL = process.env.MONGODB_URL || "mongo://localhost:27017/node-ci-testdb";
mongoose.connect('mongodb://localhost/clevernote');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('db connection opened successfully');
});


var assert = require('assert');


// specific test database, and we'll wipe it after every test //

var clearDbAfterTests = true;

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

/* testing curl
test save: 
curl --insecure -X POST -H "Content-Type: application/json" -d '{"title": "hi", "tags": ["help", "me", "save"], "body": "longbodybodfkjsdf lkjsdflkjsdf sdflkjsdf "}' https://localhost:3030/notes/

test getNoteList: 
curl --insecure -X GET  https://localhost:3030/notes/list

test retrieve: 
curl --insecure -X GET  https://localhost:3030/notes/52f5e3a2efa5d2c5b57c76b4

testring destroy: 
curl --insecure -X GET  https://localhost:3030/notes/destroy/53046abcf5df756927fd01ac
*/

describe('#DB', function(){
  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/testernote');
  var db = mongoose.connection;
  // before();
  describe('API endpoints', function(){
    it('should accept a note',function(){});
    it('should retrieve a note when requested by ID#',function(){});
    it('should return a list of all notes',function(){});
    it('should destroy all notes',function(){});
  });
  // after(); // drop the DB
});