import $ from 'jquery';
import 'owl.carousel';
import 'rangeslider.js';

const list = $('.video__list');
const item = $('.video__item');
const rangeSlider = $('.video__slider');

const listWidth = item.length * item.width() - 1170/2;
console.log(item.width(), item.outerWidth(), item.innerWidth());
list.width(listWidth);
const ratio = listWidth / rangeSlider.width();


//
// slickCarousel.owlCarousel({
//     stagePadding: 5,
//     loop:true,
//     autoWidth:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:2
//         },
//         1000:{
//             items:3
//         }
//     }
// });
// slickCarousel.slick({
//     dots: false,
//     arrows:false,
//     infinite: false,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     draggable: false,
//
//     responsive: [
//         {
//             breakpoint: 1221,
//             settings: {
//                 infinite: true,
//                 centerMode: true,
//                 slidesToShow: 2,
//                 slidesToScroll: 2
//             }
//         },
//         {
//             breakpoint: 801,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//     ]
// });


$('#video-range').rangeslider({
    polyfill: false,
    onSlide: function(position, value) {
        list.css({
            'transform': 'translateX(-' + ratio * position + 'px)'
        });
        console.log(position, value);
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
