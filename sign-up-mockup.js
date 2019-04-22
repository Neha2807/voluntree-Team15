var rootRef = firebase.database().ref().child("user");

var email = document.getElementById("exampleInputEmail1");
var radios = document.getElementsByName('radio-choice');



$('#submit').click(function(){

        var strippedemail = email.value.replace(/\./g,'');
        rootRef.child(strippedemail).set({
        firstname:$('#firstname').val(),
        lastname:$('#lastname').val(),
        password:$('#exampleInputConfirmPassword1').val(),
        birthdate:$('#day').val()+" "+$('#select-choice').val()+" "+$('#year').val(),
        
    });
    window.location.replace("login.html");
    
    
});
$('')
