$(function() {
    /*$('.countdown').countdown({
        date: "October 30, 2015 07:00:00"
    });*/
    
    $('.countdown.styled').countdown({
          date: "October 30, 2015 07:00:00",
          render: function(data) {
            $(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
          }
        });
});