
'use strict';

let I;

module.exports = {
    
    _init() {
        I = require('../steps_file.js')();
    },
    
    root: 'div.navbar.page-header',
    
    _openMenu() {
        within(this.root, function() {
            I.click('div > div.nav.nav-header.user.pull-right > ul > li > a');
        });
    },
    
    cleanCache() {
        within(this.root, function() {
            this._openMenu();
            I.waitForVisible('#cache');
            I.click('#cache');
        });
    },
    
    logout() {
        within(this.root, function() {
            this._openMenu();
            I.waitForVisible('#logout');
            I.click('#logout');
        });
    },
    
    impersonate() {
        within(this.root, function() {
            this._openMenu();
            I.waitForVisible('#impersonate');
            I.click('#impersonate');
        });
    },
    
};
