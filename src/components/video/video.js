import $ from 'jquery';
import 'rangeslider.js';

const slider = $('.video__list');
slider.slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});


$('#video-range').rangeslider({
    polyfill: false,
    onSlide: function(position, value) {
        console.log(position, value);
        slider.slick('slickGoTo', value);
    }
});