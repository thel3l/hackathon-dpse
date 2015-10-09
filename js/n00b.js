$(function() {
    $(".switch").change(function() {
        window.location.assign("1337Toggle/1337Toggle.html");
    })
    
    $("#maptoggle").click(function() {
        
        if ($("iframe.map").length > 0) {
            $("iframe.map").remove();
        } else {
            $( "#infocontainer" ).append('<iframe class="map" frameborder="0" height="450" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52326.308770815405!2d77.69481063320941!3d12.896391034851758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae12b4e0ca4ad5%3A0xe7851645e27bf86c!2sDelhi+Public+School!5e0!3m2!1sen!2sin!4v1443842307164" style="border:0" width="100%"></iframe>');
            $("html, body").animate( {scrollTop: ( $("iframe.map").offset().top )}, '500', 'swing');
        }
        
    })
});
