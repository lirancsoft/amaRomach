$( document ).ready( function() {
    $('.ui.dropdown')
        .dropdown({
            values: [
                {
                    name: '1',
                    value: 1,
                    selected: true,
                },
                {
                    name     : '2',
                    value    : 2,
                },
                {
                    name     : '3',
                    value    : 3,
                },
                {
                    name     : '4',
                    value    : 4,
                },
                {
                    name     : '5',
                    value    : 5,
                }
            ]
        })
    ;
});