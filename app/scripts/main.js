/* credit - modified from http://jsfiddle.net/rsadwick/zwWHY/ */
(function($) {
    'use strict';

    $('.flip').mouseover(function(){
        $(this).find('.card').addClass('flipped');
    });
    $('.flip').mouseleave(function(){
        $(this).find('.card').removeClass('flipped');
    });

    window.setTimeout(function() {
        $('.card').addClass('flicked');
    }, 200);
    window.setTimeout(function () {
        $('.card').removeClass('flicked');
    }, 500);

    $('.frame').click(function(e) {
        if ( !$(e.target).parents('.card').length ) {
            $('.card').removeClass('flipped');
        }
    });
})(jQuery);
