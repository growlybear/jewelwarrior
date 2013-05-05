/*global define */
define('dom', [], function () {
    'use strict';

    function hasClass(el, className) {
        return 'checking for class ...';
    }

    function addClass(el, className) {
        return 'adding class ...';
    }

    function removeClass(el, className) {
        return 'removing class ...';
    }

    return {
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass
    };
});
