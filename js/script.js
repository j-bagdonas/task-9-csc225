
jQuery(document).ready(function(){
    
    $("button").click(function(){
        var inputValue = $("input").val();
        if(inputValue){
            $("#taskList").prepend("<li class = \"list-group-item\">" + inputValue +  "</li>");
        }
    }); 
    
});

