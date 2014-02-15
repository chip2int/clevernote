var express = require('express');
var https   = require('https');
var http   = require('http');

var path    = require('path');
var app     = express(),
    httpApp = express();
var db      = require('./db.js');
var fs      = require('fs');


/* 
 Make sure you have followed the instructions to create the following keys
*/

var certPath = path.join(__dirname, '/cryptokeys/');
var sslOptions = {
  key: fs.readFileSync(path.join(certPath, 'server.key')),
  cert: fs.readFileSync(path.join(certPath, 'server.crt')),
  ca: fs.readFileSync(path.join(certPath, 'ca.crt')),
  requestCert: true,
  rejectUnauthorized: false
};

httpApp.set('port', process.env.PORT || 3500);
httpApp.get("*", function (req, res, next) {
    res.redirect("https://" + req.headers.host + "/" + req.path);
});

// app.set('port', process.env.PORT || 3500);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({ 
  secret: process.env.SESSION_SECRET || 'keyboardcat' ,
  cookie: {httpOnly: true, secure: true}
}));

app.use(express.static(path.join(__dirname, '..', '/public')));


/* node endpoints */
app.get('/notes/list', db.noteList );
app.get('/notes/:noteId', db.retrieve );
app.post('/notes/', db.save );

// app.post('/search/:tags', db.search); //TODO: allow searching


console.log("Dir", __dirname);

http.createServer(httpApp).listen(httpApp.get('port'), function() {
    console.log('Express HTTP server listening on port ' + httpApp.get('port'));
});

https.createServer(sslOptions,app)
  .listen('3030', function(){
  console.log("Secure Express server listening on port 3030");
});

app.listen(app.get('port'));


