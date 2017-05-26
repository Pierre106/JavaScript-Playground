$(document).ready(function () {
    // Adjusting menu showing and hiding menu on click //
    $("#menu").click(function () {
        $(this).toggleClass("active-menu");
        $("#side-menu").toggleClass("active-side-menu").children("a").removeClass("selected-item");
    });

    // some styles on menu item when clicked //
    $("#side-menu a").on("click", function () {
        $(this).addClass("selected-item").siblings().removeClass("selected-item");
        $("#menu").toggleClass("active-menu");
        $("#side-menu").toggleClass("active-side-menu");
    });

    // controlling side menu //
    // smooth scrolling when a link in the menu is clicked //
    $("a[href^='#']").on("click", function (event) {
        var target = $($(this).attr("href"));

        if (target.length) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: target.offset().top
            }, 1500);
        }
    });
});