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
            breakpoint: 1221,
            settings: {
                infinite: true,
                centerMode: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 801,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
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