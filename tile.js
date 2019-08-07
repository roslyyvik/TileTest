$("#btn").click(function(e) {
    $("#myContainer").slideDown("slow");
    e.stopPropagation();
});
$("#myContainer").click(function(e) {
    e.stopPropagation();
});
$(document).click(function(e) {
    $("#myContainer").slideUp("slow");
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}