require.config({
    paths: {
        sizzle: '../components/sizzle/sizzle'
    },
    shim: {
        // bootstrap: {
        //     deps: ['jquery'],
        //     exports: 'jquery'
        // }
    }
});

require(['sizzle', 'dom', 'game'], function ($, dom, game) {
    'use strict';

    console.log($('#game'));
    console.log(dom.addClass());
    console.log(game);
});
