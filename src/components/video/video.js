import $ from 'jquery';
import 'rangeslider.js';

const slickCarousel = $('.video__list');
slickCarousel.slick({
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
        slickCarousel.slick('slickGoTo', value);
    }
});


// $( function() {
//     var handle = $( "#custom-handle" );
//     $( "#slider" ).slider({
//         min: 1,
//         max: 15,
//         slide: function( event, ui ) {
//             // handle.text( ui.value );
//             slickCarousel.slick('slickGoTo', ui.value)
//         }
//     });
// } );
