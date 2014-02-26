var express  = require('express'),
    https    = require('https'),
    http     = require('http'),
    path     = require('path'),
    app      = express(),
    httpApp  = express(),
    db       = require('./db.js'),
    fs       = require('fs'),
    mongoose = require('mongoose');


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


/* routes */
require('./routes/userRoutes.js')(app);
require('./routes/noteRoutes.js')(app);
require('./routes/tagRoutes.js')(app);
require('./routes/bookRoutes.js')(app);

// app.post('/search/:tags', db.search); //TODO: allow searching on frontend


console.log("Dir: ", __dirname);

/* if NOT running in test environ, run like normal */
if (!module.parent) { 
  /* init the db */
  var MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/clevernote";
      mongoose.connect(MONGODB_URL);
  var mongo = mongoose.connection;

      mongo.on('error', console.error.bind(console, 'connection error:'));
      mongo.once('open', function(){
        console.log('mongo connection opened successfully');
      });

  http.createServer(httpApp).listen(httpApp.get('port'), function() {
      console.log('Express HTTP server listening on port ' + httpApp.get('port'));
  });

  https.createServer(sslOptions,app)
    .listen('3030', function(){
    console.log("Secure Express server listening on port 3030");
  });
  // app.listen(app.get('port'));
}
