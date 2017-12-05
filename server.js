
var express      = require('express'),
    db           = require('./models'),
    bodyParser   = require('body-parser'),
    cookieParser = require('cookie-parser');
    path         = require('path'),
    app          = express();


  /******
  * CORS *
   ******/

 var allowedOrigins = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if (req.method === 'OPTIONS') {
      res.send(200);
    }
    else {
      next();
    }
};

  /****************
  *  CONFIGURATION *
   ****************/


app.use(allowedOrigins);
app.set('port', (process.env.PORT||3000));
app.use('/static', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true})),
app.use(bodyParser.json());

  /**********
  *  ROUTES *
   **********/


app.get(['/', '/index', '/markup'], function (req, res){

  res.sendFile(path.join(__dirname  + '/views/index.html'));
});

 /* Fetch all*/

app.get('/products', function(req, res, next){

  db.Product.find({}, function(err, products){

    if(err){
      console.log("Error: ", err);
    }

    res.json(products);

  });

})

  /**********
   * SERVER *
   **********/

  /*App listen port 3000*/

app.listen(app.get('port'), function(){
	console.log('Server Listening At Port 3000');

})
