/*global define */
define('dom', [], function () {
    'use strict';

    function hasClass(el, checkClass) {
        var regex = new RegExp('(^|\\s)' + checkClass + '(\\s|$)');
        return regex.test(el.className || '');
    }

    function addClass(el, newClass) {
        if (!hasClass(el, newClass)) {
            el.className = (el.className || '') + ' ' + newClass;
        }
    }

    function removeClass(el, oldClass) {
        var regex = new RegExp('(^|\\s)' + oldClass + '(\\s|$)');
        el.className = (el.className || '').replace(regex, ' ');
    }

    return {
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass
    };
});
