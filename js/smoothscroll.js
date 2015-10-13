$(function() {
    
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
    
    $('.nav').css({ 'position': 'fixed', 'top': 0, 'left': 0, 'text-align': 'center'});
    
    $('#modelever').remove();
    $('#modelevercontainer').append('<input type="checkbox" id="modelever">');

});
