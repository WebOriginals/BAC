$(document).ready(function(){ 
    if ($(".burger").length) {
        $(".burger").click(function () {
            $(this).toggleClass("burger--act");
            $(".menu").toggleClass("menu--act");
            $(".html-sth").toggleClass("html-menu-open");
        });
    }
}); //close ready

