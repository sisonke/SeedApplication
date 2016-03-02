var express = require('express'),

    exphbs  = require('express-handlebars'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser'),
    //home = require('./routes/home'),
    downloads = require('./routes/downloads'),
    playlist = require('./routes/playlist'),
    contactus = require('./routes/contact us')

var app = express();

var dbOptions = {
      host: 'localhost',
      user: 'root',
      password: '12345',
      port: 3306,
      database: 'Music'

};

//setup middleware
app.use(myConnection(mysql, dbOptions, 'single'));
app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');

function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
}

//setup the handlers
app.get('/',function(req, res){
  res.render('home')
  });


//sisonke's routes
app.get('/downloads', downloads.show);
app.get('/playlist', playlist.show);
//app.get('/contact us', contactus.get);







//configure the port number using and environment number
var portNumber = process.env.CRUD_PORT_NR || 3009;


//start everything up
app.listen(portNumber, function () {
    console.log('Read, Update, listening on:', portNumber);
});
