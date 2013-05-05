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

    game.showScreen('#splash-screen');
});
