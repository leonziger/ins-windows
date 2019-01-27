import $ from 'jquery';
import 'rangeslider.js';

const slider = $('.video__list');
slider.slick({
    dots: false,
    arrows:false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,

    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});


$('#video-range').rangeslider({
    polyfill: false,
    onSlide: function(position, value) {
        slider.slick('slickGoTo', value);
    }
});