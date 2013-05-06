/*global define, describe, it, expect */
/*jshint expr:true */
'use strict';

function createEl(type, attrs) {
    attrs = attrs || {};
    var key,
        el = document.createElement(type);
    for (key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
    return el;
}

describe('Sanity check', function () {
    describe('chai testing lib', function () {
        it('should be working', function () {

            expect(true).to.equal(true);
            expect(true).to.not.equal(false);
            expect('foo'.length).to.equal(3);

        });
    });
});

describe('Helper function tests', function () {
    describe('createEl', function () {
        it('should create elements with attributes', function () {
            var e1 = createEl('p', { class: 'foo', id: 'growly' });

            expect(e1.tagName).to.equal('P');
            expect(e1.className).to.equal('foo');
            expect(e1.id).to.equal('growly');
            expect(e1.innerHTML).to.be.empty;
        });
    });
});

define(['dom', 'game'], function (dom, game) {
    describe('Dom module tests', function () {
        describe('dom', function () {
            it('should expose the correct api', function () {
                expect(dom).to.have.keys(['hasClass', 'addClass', 'removeClass']);
            });
        });

        describe('dom.hasClass', function () {
            it('should check for a class', function () {
                var e1 = createEl('div', { class: 'foo' }),
                    e2 = createEl('div', { class: 'foobar' }),
                    e3 = createEl('div', { class: 'baz foo bar' }),
                    e4 = createEl('div');

                expect(dom.hasClass(e1, 'foo')).to.be.ok;
                expect(dom.hasClass(e2, 'foo')).to.not.be.ok;
                expect(dom.hasClass(e3, 'foo')).to.be.ok;
                expect(dom.hasClass(e4, 'foo')).to.not.be.ok;
            });
        });

        describe('dom.addClass', function () {
            it('should add a class', function () {
                var e1 = createEl('div', { class: 'foo'});

                expect(dom.hasClass(e1, 'baz')).to.not.be.ok;
                dom.addClass(e1, 'baz');
                expect(dom.hasClass(e1, 'baz')).to.be.ok;
            });
        });

        describe('dom.removeClass', function () {
            it('should remove a class', function () {
                var e1 = createEl('div', { class: 'foo'}),
                    e2 = createEl('div', { class: 'foo bar'}),
                    e3 = createEl('div', { class: 'baz foo bar'});

                expect(dom.hasClass(e1, 'foo')).to.be.ok;
                dom.removeClass(e1, 'foo');
                expect(dom.hasClass(e1, 'foo')).to.not.be.ok;

                expect(dom.hasClass(e2, 'foo')).to.be.ok;
                dom.removeClass(e2, 'foo');
                expect(dom.hasClass(e2, 'foo')).to.not.be.ok;
                expect(dom.hasClass(e2, 'bar')).to.be.ok;

                expect(dom.hasClass(e3, 'foo')).to.be.ok;
                dom.removeClass(e3, 'foo');
                expect(dom.hasClass(e3, 'foo')).to.not.be.ok;
                expect(dom.hasClass(e3, 'bar')).to.be.ok;
                expect(dom.hasClass(e3, 'baz')).to.be.ok;

            });
        });
    });

    describe('Game module tests', function () {
        describe('game', function () {
            it('should expose the correct api', function () {
                expect(game).to.have.keys(['showScreen']);
            });
        });

        describe('game.showScreen', function () {
            it('should make one screen active', function () {

                // TODO set up fixtures for this test, or
                // refactor the game module to be more testable

            });
        });

    });
})();
