$( document ).ready(function() {
    $('.ui.rating')
        .rating({
            icon: 'star',
            initialRating: 3,
            maxRating: 5
        })
    ;
});