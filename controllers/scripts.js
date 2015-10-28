
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
        url:"http://localhost:28017/oma/person/",
        dataType:"jsonp",
        jsonp:"jsonp"
    }
    
    $.ajax(setting).done(function(data){ 
        //kun serveriltä vastaus, kutsu done-funktiota
        console.log(data);
        for(var i=0; i < data.rows.length; i++){
            
            var html = "<tr>" +
                    "<td>" + data.rows[i].name + "</td>" +
                    "<td>" + data.rows[i].address + "</td>" +
                    "<td>" + data.rows[i].age + "</td>" +                
                    "</tr>";
            
            $(html).appendTo("tbody");

        }
        
        /*for(var i=0; i < data.rows.length; i++){
            
            var html =
                    "<li>" + data.rows[i].name + "</li>" +
                    "<li>" + data.rows[i].address + "</li>" +
                    "<li>" + data.rows[i].age + "</li>"              
                    ;
            
            $(html).appendTo("tbody");

        } */       
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
