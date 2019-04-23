
  var rootRef = firebase.database().ref();

window.onload = function() {
    getevents();
  };
  function adminSignOut(){
    sessionStorage.clear()
    window.location.replace("index.html")
  }

  function  getevents(){
      var ename = document.getElementById("ename")
      rootRef.on('value', function(snapshot){
        var event_name1 = snapshot.child('Events/Event 1/ename').val();
        var event_description1 = snapshot.child('Events/Event 1/edescription').val();
        var etotalvolunteers1 = snapshot.child('Events/Event 1/etotalvolunteers').val();
        var event_name2 = snapshot.child('Events/Event 2/ename').val();
        var event_description2 = snapshot.child('Events/Event 2/edescription').val();
        var etotalvolunteers2 = snapshot.child('Events/Event 2/etotalvolunteers').val();
        var event_name3 = snapshot.child('Events/Event 3/ename').val();
        var event_description3 = snapshot.child('Events/Event 3/edescription').val();
        var etotalvolunteers3 = snapshot.child('Events/Event 3/etotalvolunteers').val();
        var event_name4 = snapshot.child('Events/Event 4/ename').val();
        var event_description4 = snapshot.child('Events/Event 4/edescription').val();
        var etotalvolunteers4 = snapshot.child('Events/Event 4/etotalvolunteers').val();
        var event_name5 = snapshot.child('Events/Event 5/ename').val();
        var event_description5 = snapshot.child('Events/Event 5/edescription').val();
        var etotalvolunteers5 = snapshot.child('Events/Event 5/etotalvolunteers').val();
        var event_name6 = snapshot.child('Events/Event 6/ename').val();


        document.getElementById("ename1").innerHTML = event_name1;
        document.getElementById("edescription1").innerHTML = event_description1;
        document.getElementById("etotalvolunteers1").innerHTML = etotalvolunteers1;
        sessionStorage['eventname1'] = event_name1 ;
        document.getElementById("edescription2").innerHTML = event_description2;
        document.getElementById("etotalvolunteers2").innerHTML = etotalvolunteers2;
        document.getElementById("ename2").innerHTML = event_name2;
        sessionStorage['eventname2'] = event_name2 ;
        document.getElementById("etotalvolunteers3").innerHTML = etotalvolunteers3;
        document.getElementById("edescription3").innerHTML = event_description3;
        document.getElementById("ename3").innerHTML = event_name3;
        sessionStorage['eventname3'] = event_name3 ;
        document.getElementById("edescription4").innerHTML = event_description4;
        document.getElementById("ename4").innerHTML = event_name4;
        document.getElementById("etotalvolunteers4").innerHTML = etotalvolunteers4;
        sessionStorage['eventname4'] = event_name4;
        document.getElementById("ename5").innerHTML = event_name5;
        document.getElementById("edescription5").innerHTML = event_description5;
        document.getElementById("etotalvolunteers5").innerHTML = etotalvolunteers5;
        sessionStorage['eventname5'] = event_name5 ;
        // document.getElementById("ename6").innerHTML = event_name6;
        // document.getElementById("etotalvolunteers1").innerHTML = etotalvolunteers1;
        // sessionStorage['eventname6'] = event_name6 ;

        // var ref = rootRef.child(); 
      var number = snapshot.child('Events/Event 1/registrations').val();
      console.log(number); 
      $('#hidden_table').append(number); 
       

            
  })

}

      