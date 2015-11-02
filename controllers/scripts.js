
// Client

"use strict";
console.log("Here we go!!");

//Wait document ready event, anonyymifunktion käyttö
$(document).ready(function(){ 
    // ready käynnistyy, kun selain saavuttaa päättävän body-tagin
    
    console.log("jquery onload triggered"); 
    
    //hae html-dokumentista kaikki nav ja p elementit ja muuta niiden tyyli    
    //$("nav,p").css("background-color", "lightblue"); 
    //$("[class]").css("background-color", "lightblue"); 
    //$("*").css("background-color", "lightblue"); 
    
    $("#head").css("background-color", "lightblue")
        .css("padding", "20px").css("border-radius","8px");
    $(".about").html("<b>New text</b>");
    $("[data-dummy]").html("<p>Hello World</p>");
    
    var setting = { 
        // objekti tehään usein kuitenkin inline
        method:"GET",
        url:"http://localhost:3000/persons",
        dataType:"json",
    }
    
    $.ajax(setting).done(function(data){ 
        //kun serveriltä vastaus, kutsu done-funktiota
        console.log(data);
        
        //Get all keys (attribute names) from json object
        console.log(Object.keys(data[0]));
        
        //Check that there are elements in array
        if(data.length > 0) {
            //Create table headers dynamically
            var headers = Object.keys(data[0]);
            var row = $("<tr></tr>");
            for(var i = 1; i < headers.length; i++){
                $("<th>" + headers[i] + "</th>").appendTo(row);
            }
            //Add row to thead element
            $(row).appendTo("thead");
        }
        
        //Create headers also dynamically
        var headers = Object.keys(data[0]);
        
        
        for(var i=0; i < data.length; i++){
            
           
            var html = "<tr>" +
                    "<td>" + data[i].name + "</td>" +
                    "<td>" + data[i].address + "</td>" +
                    "<td>" + data[i].age + "</td>" +                
                    "</tr>";
            
            $(html).appendTo("tbody");

        }
        
    });
    
});

/*
$(document).ready(domReady);

function domReady() { //nimellisen funktion käyttö
}
*/
/*
var test = 123;
test = "error"

window.onload = function(event){     anonyymi funktio eli funktio, jolla ei nimeä 
    console.log(event);
    para1.innerHTML = "Changed from JS";
    para1.style.backgroundColor = "yellow";
}

window.onload = domReady; callback funktio

function domReady(event){
    return 2;
}

function someFunction(nimi){
    console.log(nimi);
}

someFunction();
someFunction("Terhi");
*/
