var rootRef = firebase.database().ref();

window.onload = function() {
    getevents();
  };
//Retrieve events from the database
  function  getevents(){
      var ename = document.getElementById("ename")
      rootRef.on('value', function(snapshot){
        var event_name1 = snapshot.child('Events/Event 1/ename').val();
        var event_name2 = snapshot.child('Events/Event 2/ename').val();
        var event_name3 = snapshot.child('Events/Event 3/ename').val();
        var event_name4 = snapshot.child('Events/Event 4/ename').val();
        var event_name5 = snapshot.child('Events/Event 5/ename').val();
        var event_name6 = snapshot.child('Events/Event 6/ename').val();

        //set event names in session and display on the page
        document.getElementById("ename1").innerHTML = event_name1;
        sessionStorage['eventname1'] = event_name1 ;
        document.getElementById("ename2").innerHTML = event_name2;
        sessionStorage['eventname2'] = event_name2 ;
        document.getElementById("ename3").innerHTML = event_name3;
        sessionStorage['eventname3'] = event_name3 ;
        document.getElementById("ename4").innerHTML = event_name4;
        sessionStorage['eventname4'] = event_name4 ;
        document.getElementById("ename5").innerHTML = event_name5;
        sessionStorage['eventname5'] = event_name5 ;
        document.getElementById("ename6").innerHTML = event_name6;
        sessionStorage['eventname6'] = event_name6 ;
        
  })
}