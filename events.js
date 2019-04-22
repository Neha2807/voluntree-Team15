window.onload = function() {
    seteventdetails();
  };

  function  seteventdetails(){
     document.getElementById("event_name").innerHTML = sessionStorage.getItem("eventname1");
     console.log(sessionStorage.getItem("firstname"))
     if(sessionStorage.getItem("firstname")!=null){
     document.getElementById("exampleModalLongTitle").innerHTML = "Thank you "+sessionStorage.getItem("firstname")+ "!";
     }
     else{
      document.getElementById("exampleModalLongTitle").innerHTML = " ";
     }
  }

$('#register_button').click(function(){
  if(sessionStorage.getItem("firstname")==null){
  
    document.getElementById("message_content").innerHTML = "Please Login to Register";
   } else{
    document.getElementById("message_content").innerHTML = "You are ready to make a difference!";
    var rootRef = firebase.database().ref();
    var rootRefmessages = rootRef.child("Events/Event 1/registrations");
    var strippedemail = sessionStorage.getItem("email");
    rootRefmessages.child(strippedemail).set({
        firstname:sessionStorage.getItem("firstname"),
        lastname: sessionStorage.getItem("lastname"),
        email:strippedemail
        
    });
   }
  });

  
      
     
