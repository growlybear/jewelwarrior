/*global define, describe, it, expect */
'use strict';

describe('chai lib sanity check', function () {
    it('should work as per the api docs', function () {

        expect(true).to.equal(true);
        expect(true).to.not.equal(false);
        expect('foo'.length).to.equal(3);

    });
});

define(['dom', 'game'], function (dom, game) {
    describe('dom module tests', function () {
        it('should have meet some initial criteria', function () {

            expect(dom).to.have.property('hasClass');
            expect(dom).to.not.have.property('pollyWaffle');

        });
    });

    describe('game module tests', function () {
        it('should have meet some initial criteria', function () {

            expect(game).to.be.an('object');
            expect(game).to.include.keys('showScreen');

        });
    });
})();
