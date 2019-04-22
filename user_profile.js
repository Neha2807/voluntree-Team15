//Function triggered on click of register button
$('#register_button').click(function(){
    var rootRef = firebase.database().ref();
    var rootRefmessages = rootRef.child("Events/Event 1/registrations");
    var strippedemail = sessionStorage.getItem("email");
        rootRefmessages.child(strippedemail).revome();;
      });
