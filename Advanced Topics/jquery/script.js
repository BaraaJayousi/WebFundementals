//ensuring jquery doens't start before the document is ready
//Below line is a short version for $(document).ready(function(){}
$(()=>{
    $("button").click(()=>{
        // alert("You have clicked button event")
        $("#hover").show();
    })
    
    $("#hover").mouseleave(function() {
        //use "this" to select same element's selected
        $(this).fadeOut(300);
    })
    

    $("#multi-event").on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(this).css("background-color", "lightblue");
        },
        click: function(){
            $(this).css("background-color", "yellow");
        }
    });

    $("#txt-change").dblclick(function(){
        $(this).text("You have double clicked me")
    })
});

