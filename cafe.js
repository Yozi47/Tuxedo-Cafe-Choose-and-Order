$(document).ready(function () {
    $("img.info").hide();                           // Hiding the image that has information.
    $("option").hide();                             // Hiding the options of select tag.
    var total = 0;                                  // Total price 0, initially.
    
    // For loop, in general, to show and hide the required image.
    $("img.real").each( function() {
        var url = $(this).attr("src");              // saving the source of this image.
        
        //Preloads the image.
        var discImage = new Image();
        discImage.src = url
        
        // Function to appear the information image when hovered over the consequent image. This function reverts back to orginal state too when mouse id out.
        $(this).hover( 
            function() {
                $(this).hide();
                $(this).next().show();},
            function() {
                $(this).next().hide();
                $(this).show();
            });
    }); // ends the each-loop and which is used to show and hide the info. image.
    
    // Function to show the contents on the "Your Order" field selected from the image. Also adds up a total value at the bottom.
    $(".info").click(function() { 
        var imgnam = $(this).attr("name");
        $("option").each(function() {
            var opname = $(this).attr("name");
            var valu =  parseFloat($(this).attr("value"));
            if(imgnam == opname){
                $(this).show();
                total = total + valu;
            }
        })
        var new_total = "Total: $" + total.toFixed(2); 
        $("#total").html(new_total);                   // Changes the html content of the tag with #total id.
        
    }); // End of the click event to fill the order. 
    
    $("input:submit").click(function(event) {
        if(total == 0){
            event.preventDefault();                 // Click event triggered to not do the default thing when the total is 0. Default event is to proceed over checkout page.
        }
    }); // ends submit click event.
    
    // Modifying the contents after the reset button is hit which makes it look like the website is fresh without any orders selected right now.
    $("input:reset").click(function() {
       $("option").hide();
        total = 0;
        count = 0;
        var new_total = "Total: $" +total.toFixed(2); 
        $("#total").html(new_total);
    }); //ends reset click event.
}); // ends ready function.