var casper = require('casper').create();

casper.start('http://localhost:9000', function() {
    'use strict';

    // basic page tests
    this.test.assertSelectorHasText('title', 'Jewel Warrior');
    this.test.assertExists('#game', 'Game container found');
    this.test.assertEvalEquals(function () {
        return document.querySelectorAll('.screen').length;
    }, 4, '4 game screens found');
});

casper.then(function () {
    'use strict';

    // interactive tests for page behaviours here
    // this.click('.whatever');
});

casper.then(function() {
    'use strict';

    // console.log() alternative, with nice colorization options
    this.echo('Clicked ok, new location is ' + this.getCurrentUrl(), 'INFO');
});

casper.run(function() {
    'use strict';

    // maintain a manual running count of all tests in case of unexpected
    // early script termination. cf http://casperjs.org/api.html#tester.done
    this.test.done(3);
    this.exit();
});
