var db = require('./database');

/**
  *This function gets all documents from person collection
  */

exports.getAllPersons = function(req,res){
    
   db.Person.find(function(err,data){
    
       if(err){
            console.log(err.message);
            res.send("Error in database!");
        }
        else{
            res.send(data);
        }
    
    });
}

/**
  *This function saves new person information to our person
  *collection
  */

exports.saveNewPerson = function(req,res){
    var personTemp = new db.Person(req.body);   //body sisältää json-objektin
    //Save it to database
    personTemp.save(function(err,ok){

        res.send("Database action done");
    });
}