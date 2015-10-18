$(function() {

    //Mode Switch
    $(".switch").change(function() {
        window.location.assign("1337/index.html");
    })

    //Map button Toggle
    $("#maptoggle").click(function() {
        if ($("iframe.map").length > 0) {
            var bottonOffset = $(window).height() - $("#sect4").offset().top - $("#sect5").height();
            //alert(bottonOffset);
            $("html, body").animate( {scrollTop: ( bottonOffset )}, { queue: false, duration: 500, easing: 'swing', complete: function() { $("iframe.map").remove() } });
            //.animate( {scrollTop: ( $("#sect4").offset().top )}, '500', 'swing', );

        } else {
            $( "#infocontainer" ).append('<iframe class="map" frameborder="0" height="450" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52326.308770815405!2d77.69481063320941!3d12.896391034851758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae12b4e0ca4ad5%3A0xe7851645e27bf86c!2sDelhi+Public+School!5e0!3m2!1sen!2sin!4v1443842307164" style="border:0" width="100%"></iframe>');
            $("html, body").animate( {scrollTop: ( $("iframe.map").offset().top )}, '500', 'swing');
        }
    })

    //Countdown
    $('.countdown.styled').countdown({
        date: "November 7, 2015 07:00:00",
        render: function(data) {
            $(this.el).html("<div class=\"strongcountdown\">" +
                this.leadingZeros(data.days, 2) +
                " <span>days</span></div><div class=\"strongcountdown\">" + this.leadingZeros(
                    data.hours, 2) +
                " <span>hrs</span></div><div>" + this.leadingZeros(
                    data.min, 2) +
                " <span>min</span></div><div>" + this.leadingZeros(
                    data.sec, 2) +
                " <span>sec</span></div>");
        }
    });

    //Smooth scroll
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

    //CSS Fix on load
    $('.nav').css({ 'position': 'fixed', 'top': 0, 'left': 0, 'text-align': 'center'});

    //Signup bar Toggle with close button
    $(".signup").hide();
    $("#signuptoggler").click(function(){
        $(".signup").toggle();
    });
    $("#xButton").click(function(){
        $(".signup").hide();
    });

});
