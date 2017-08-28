
'use strict';

let I;

module.exports = {
    
    _init() {
        I = require('../steps_file.js')();
    },
    
    root: 'div.navbar.page-header',
    
    _openMenu() {
        within(this.root, function() {
            I.waitWhileElement('div.spinner');
            I.waitForVisible('div > div.nav.nav-header.user > ul > li > a');
            I.click('div > div.nav.nav-header.user > ul > li > a');
        });
    },
    
    cleanCache() {
        I.waitForElement(this.root);
        let _this = this;
        within(this.root, function() {
            _this._openMenu();
            I.waitForVisible('#cache');
            I.click('#cache');
        });
    },
    
    logout() {
        I.waitForElement(this.root);
        let _this = this;
        within(this.root, function() {
            I.waitWhileElement('div.spinner');
            I.waitForVisible('div > div.nav.nav-header.user > ul > li > a');
            I.click('div > div.nav.nav-header.user > ul > li > a');
            I.waitForVisible('#logout');
            I.click('#logout');
        });
    },
    
    impersonate() {
        I.waitForElement(this.root);
        let _this = this;
        within(this.root, function() {
            _this._openMenu();
            I.waitForVisible('#impersonate');
            I.click('#impersonate');
        });
    },
    
};
