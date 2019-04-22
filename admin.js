$(document).ready(function(){
 
    var counter = 1;
    $('tr td table').each(function() {
    var expanel_id = 'expanel-' + counter;
       $(this).parent().parent().prev("tr").children("td.details-control").children("button").attr("aria-controls",expanel_id);
       $(this).parent().parent().attr("id",expanel_id);
       counter++;
       // Toggle the state properties
       $("button").click(function (){
       var state = $(this).attr("aria-expanded");
           if(state === "true")
           {
               $(this).attr("aria-expanded",'false');
           }
           else
           {
               $(this).attr("aria-expanded",'true');
           }
           $(this).parent().parent().next("tr").toggleClass( "hidden" );
           });
    });	
   });