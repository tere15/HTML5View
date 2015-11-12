//serveri (backend)

// nodea käyttämällä ei tarvi huolehtia säikeistä, expressillä tehään i/o -operaatioita

// javascriptissä "" tai '' ei ole merkitystä

var express = require("express");  // ladataan express moduuli muuttujaan
var path = require("path");
var bodyParser = require("body-parser");
var database = require('./modules/database');
var queries = require('./modules/queries');
var person = require('./modules/person');
var user = require('./modules/user');
var app = express();    // luodaan serveri

//Middlewaret ja routersit käsitellään pinona, jokaisen middlewaren esittelyjärjestys on merkityksellinen
//----------------------------Middlewares--------------------------

// middlewaret esitellään aina ennen routereita
// käydään läpi, vaikka kutsu olisi osoitettu routerille

//Bodyparser json() middleware parses the json object
//from HTTP POST request
app.use(bodyParser.urlencoded());
app.use(function(req,res,next){                     // 1.
    
    console.log(req.method);
    console.log(req.path);
    console.log(__dirname)
    console.log(req.body);
    //console.log(database.Person);
    //database.myFunction();
    //Send reques forward in stack
    next(); // seuraavaan middlewareen
});

app.use('/',express.static(path.join(__dirname, 'views'))); // 2.
app.use('/css',express.static(path.join(__dirname, 'css')));    // 3.
app.use('/controllers',express.static(path.join(__dirname, 'controllers')));    // 4.
app.use('/lib',express.static(path.join(__dirname, 'lib')));    // 5.

app.use('/persons',person);    //6.
app.use('/friends',user);       


//----------------------------ROUTERS------------------------------------------------


//app.get("/css/styles.css", function(req,res){
    
  //  res.sendfile("css/styles.css"); // palauttaa index.html-tiedoston selaimeen
//});

app.get("/persons", function(req,res){//
    queries.getAllPersons(req,res);
    //res.send("Hello persons there!");
});


app.listen(3000); // käynnistetään serveri (kuuntele porttia 3000, voi käyttää tässä testissä portteja 3000 ->)