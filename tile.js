$("#btn").click(function(e) {
    $(".search").fadeIn();
    $("#myText").addClass(".active").focus;
    $(".mystyle").css({ "display": "none" });
    e.stopPropagation();
});
$("#myContainer").click(function(e) {
    e.stopPropagation();
});
$("input").focus(function() {
    $(".mystyle").slideDown("slow");
});
$(document).click(function(e) {
    $(".mystyle").slideUp();
    $(".search").fadeOut("slow");
});


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
