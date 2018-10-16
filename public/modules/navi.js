 $(window).scroll(function() {
    if($(this).scrollTop() > 80)  /*height in pixels when the navbar becomes navbar-default1*/
    {
        $('.navbar-default').addClass('navbar-default1');
    } else {
        $('.navbar-default').removeClass('navbar-default1');
    }
});