$( document ).ready(function() {
    $('.ui.accounts-popup')
        .popup({
            inline     : true,
            hoverable  : true,
            position   : 'bottom left',
            delay: {
                show: 300,
                hide: 800
            }
        })
    ;
});