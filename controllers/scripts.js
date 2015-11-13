
// frontend, client

//"use strict";
//console.log("Here we go!!");

//This variable is shown to every function
//var g_person_data;

//Wait document ready event, anonyymifunktion käyttö
$(document).ready(function(){ 
    // ready käynnistyy, kun selain saavuttaa päättävän body-tagin
    
    //console.log("jquery onload triggered"); 
    
    $("#search").click(function(){
        var text = $("#search_text").val();
        $.ajax({
            method:"GET",
            url:"http://localhost:3000/persons/nimi=" + text+ '/username=' + localStorage['username'],
            // persons - konteksti, nimi - oma attribuutti
        }).done(buildTable);
          
    });
    
    //hae html-dokumentista kaikki nav ja p elementit ja muuta niiden tyyli    
    //$("nav,p").css("background-color", "lightblue"); 
    //$("[class]").css("background-color", "lightblue"); 
    //$("*").css("background-color", "lightblue"); 
    
   // $("#head").css("background-color", "lightblue")
    //    .css("padding", "20px").css("border-radius","8px");
    //$(".about").html("<b>New text</b>");
    //$("[data-dummy]").html("<p>Hello World</p>");
    
    var setting = { 
        // objekti tehään usein kuitenkin inline
        method:"GET",
        url:"http://localhost:3000/friends/username=" + localStorage['username'],
        dataType:"json",
    }
    
    $.ajax(setting).done(buildTable);
});

/** 
   *Creates a modify view for our application 
   */ 

function buildModifyUI(person_data){
    
    var html = "<input id ='name' type='text' value='" + person_data.name + "'/>";
    html += "<input id ='address' type ='text' value='" + person_data.address + "'/>";
    html += "<input id ='age' value='" + person_data.age + "'/>";   
    html += "<input type='button' value='Update' id='update'/>";
    html += "<input type='button' value='Delete' id='delete'/>";
    
    $("body").html(html);   //hae body-elementti html-dokumentistä
    
    $("#delete").click(function(){
       
        $.ajax({
            method:'DELETE',
            url:'http://localhost:3000/persons/id=' + person_data._id + '/username=' + localStorage['username']
        }).done(function(data){location.reload(true)});  // refresh client
    });
    
    $("#update").click(function(){
        console.log("Update pressed");
        var temp = {
            id:person_data._id,
            name:$("#name").val(),
            address:$("#address").val(),
            age:$("#age").val()
        }
        
        $.ajax({
            method:"PUT",
            url:'http://localhost:3000/persons',
            dataType:'json',
            data:temp
        }).done(function(data){
            console.log("update response received");
            location.reload(true)
        });
    });
}

function buildTable(data){ 
      
              
     console.log(data); 
     //Get all keys (attribute names) from json object 
     //console.log(Object.keys(data[0])); 
     $("tbody").children().remove(); 
     $("thead").children().remove(); 
     //Check that there are elements in array 
     if(data.length > 0){ 
         //Create table headers dynamically 
         var headers = Object.keys(data[0]); 
         //Create row for headers 
         var row = $("<tr></tr>"); 
         for(var i = 1; i < headers.length; i++){ 
             //Create header and add it to orw 
             $("<th>" + headers[i] + "</th>").appendTo(row); 
         } 
         //Add row to thead element 
         $(row).appendTo("thead"); 
     } 
      
     //Create table content dynamically 
     for(var i=0; i < data.length; i++){ 
 
 
         var html = "<tr>" + 
                    "<td>" + data[i].name + "</td>" + 
                    "<td>"+ data[i].address + "</td>" + 
                    "<td>" + data[i].age + "</td>" + 
                    "<td><input type='button' id=" + data[i]._id + " value='Modify'/></td>" + 
                    "</tr>"; 

 
     $(html).appendTo("tbody"); 
     } 
 
 
     //Get all elements from DOM where element has 
     //attribute 'type' with value 'button'. Then add 
     //event handler for click event for each of them 
     $("[type=button]").click(function(click_data){ 
 
 
         //Loop trough all the values 
         for(var i = 0; i < data.length; i++){ 
 
 
         //Check if id from button matches one of  
         //person id 
         if(click_data.currentTarget.id == data[i]._id) 
         { 
             buildModifyUI(data[i]); 
             break; 
         } 
 
 
 
 
         } 
     }); 
} 
 
 



