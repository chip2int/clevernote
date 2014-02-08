var express = require('express');
var path    = require('path');
var app     = express();
var db      = require('./db.js');

app.set('port', process.env.PORT || 3500);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({ secret: process.env.SESSION_SECRET || 'keyboardcat' }));
app.use(express.static(path.join(__dirname, '..', '/public')));


/* note endpoints */
app.get('/notes/:noteId', db.retrieve );
app.post('/notes/', db.save );

console.log("Dir", __dirname);
app.listen(app.get('port'));
