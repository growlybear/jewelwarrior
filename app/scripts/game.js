/*global define */
define('game', ['sizzle', 'dom'], function ($, dom) {
    'use strict';

    /**
     * Hide the active screen (if any) and show the
     * screen with the specified id
     * TODO refactor this to be more testable
     */
    function showScreen(id) {
        var activeScreen = $('#game .screen.active')[0],
            screen = $(id)[0];

        if (activeScreen) {
            dom.removeClass(screen, 'active');
        }

        dom.addClass(screen, 'active');
    }

    return {
        showScreen: showScreen
    };
});
