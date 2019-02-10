window.$ = window.jQuery = require('jquery');
require('jquery-countdown');

$('#getting-started').countdown('2019/03/09', function(event) {
    // $(this).html(event.strftime('%D days %H:%M:%S'));
    $('#clock-days').html(event.strftime('%D'));
    $('#clock-hours').html(event.strftime('%H'));
    $('#clock-minutes').html(event.strftime('%M'));
    $('#clock-seconds').html(event.strftime('%S'));
});