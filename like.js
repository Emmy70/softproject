$("ul").on("click", "li", function(){
      
    ($(this).toggleClass("complete"))
    
    
    
});

//cliking on span for Deletion

$("ul").on("click",  "span", function(e){
    $(this).parent().fadeOut(5000, function(){
        
     $(this).remove();   
    })
    
    e.stopPropagation();
});

$("input[type='text'").keypress(function(event){
    
    if(event.which === 13){
 
    var todoText = $(this).val();  
    
    $(this).val("");    
        
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")    
    }
      
});
  
   $(".fa-plus").click(function(){
        $("input[type='text'").fadeToggle();

  
    
    
});