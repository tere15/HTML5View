//client events


$(document).ready(function(){
    // (step 1)
    $("#login").click(loginHandler);
    $("#register").click(registerHandler);
});

/*This function is called when login button is pressed (for reading from the database)*/

function loginHandler(event){
    
    var requestData = {
        
        username:$("#username").val(),
        password:$("#password").val()
    }
    
    localStorage['username'] = $("#username").val(); 
    sessionStorage['user'] = $("#username").val();
        
    //Send login request to server (step 2)
    $.ajax({
        
        method:'POST',
        url:'http://localhost:3000/friends/login',
        data:requestData,
        dataType: 'json'
    }).done(loginResponseHandler);
}

/*This function is called when register button is pressed (for saving to the database)*/

function registerHandler(event){
    
    var requestData = {
        
        username:$("#username").val(),
        password:$("#password").val()
    }
    
    //Send login request to server (step 2)
    $.ajax({
        
        method:'POST',
        url:'http://localhost:3000/friends/register',
        data:requestData,
        dataType: 'json'
    }).done(registerResponseHandler);    
}


/*This function is called when register response arrives in some point of time*/

function registerResponseHandler(data){
    
    $("#status").text(data.status); 
   
}

function loginResponseHandler(data){
    //If login status was ok   
    if(data.status === "Ok"){    
    // varmistetaan, että automaattista tyyppimuunnosta (esim. int -> string) ei tehä (===)
        //Ask browser to load persons.html from node server
        window.location.href='http://localhost:3000/persons.html';     
        
    }else{
        $("#status").text(data.status); 
    }
   
}

/*function renderPersonView(data){
    
    console.log(data);
    $("html").html(data);
}*/



















