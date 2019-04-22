var rootRef = firebase.database().ref();

var email = document.getElementById("email");


$('#login').click(function(){
        var password = document.getElementById("password").value;
        var strippedemail = email.value.replace(/\./g,'');
   
        rootRef.on('value', function(snapshot){
        var firstname = snapshot.child('user/'+strippedemail+'/firstname').val();
        var lastname = snapshot.child('user/'+strippedemail+'/lastname').val();
        var savedpassword = snapshot.child('user/'+strippedemail+'/password').val();
        if ((firstname ==null) || (savedpassword != password))
        {
            window.alert("Incorrect email address or password");
        }
        else
        {
        window.alert("Welcome "+firstname+" "+lastname+" !");
        if(strippedemail=='admin@voluntreecom'){
            window.location.replace("admin.html")
        }
        else{
            window.location.replace("index.html")
        }

        sessionStorage['firstname'] = firstname ;
        sessionStorage['lastname'] = lastname ;
        sessionStorage['email'] = strippedemail;
        
        }

        
    });
});


$('')