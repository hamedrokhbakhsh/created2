$(document).ready(function(){

    $(".story-btn").click((event)=> {
        //$(this)
        var btnChange = $(event.target);
        btnChange.toggleClass("menu-active");
        btnChange.next().toggleClass("change-story")
    })

});

