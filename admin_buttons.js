$(".delete_button").on("click", function(){
      $(this).closest("tr").remove(); 
  });

 
 $(".btn-primary").on("click", function(){
       $(this).closest("tr").Edit(); 
 }); 