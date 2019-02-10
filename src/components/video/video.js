import $ from 'jquery';
import 'owl.carousel';
import 'rangeslider.js';

const videoListContainer = $('.video__wrapper');
const videoList = $('.video__list');
const videoItem = $('.video__item');
const videoRange = $('#video-range');

const listWidth = videoItem.length * videoItem.outerWidth();
const listOffset = listWidth - videoListContainer.outerWidth();

if (listOffset > 0) {
    videoList.width(listWidth);

    videoRange.attr('max', listOffset);

    videoRange.rangeslider({
        polyfill: false,
        onSlide: function(position, value) {
            videoList.css({
                transform: `translateX(-${value}px)`
            });
        }
    });
} else {
    videoRange.hide();
}

