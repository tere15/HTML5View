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
