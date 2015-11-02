/***** yhteys tietokantaan  ******/
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/oma',connetctionStatus);
/*********************************/

// Kaikki tässä funktiossa privateja, jos ei exportata ulos

/**
  * Connection callback for fail and ok cases
  */

function connetctionStatus(err, ok){
    
    if(err){
        console.log(err.message);
    }else{
        console.log("We are connected!");
    }

}

var Person = mongoose.model('person',{ 
    name: String,
    address: String,
    age:{type:Number}
}, 'person');

//Using exports object you exorse the data to other modules
exports.Person = Person; // viedään muuttuja tämän moduulin ulkopuolelle, muuten näkyy vain tässä tiedostossa

exports.myFunction = function(){
    console.log("This ");
}

