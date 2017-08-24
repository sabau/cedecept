
'use strict';

let I;

module.exports = {
    
    _init() {
        I = require('../steps_file.js')();
    },
    
    root: 'div.navbar.page-header',
    
    _openMenu() {
        within(this.root, function() {
            I.saveScreenshot('02_01_01_spinner.png');
            I.waitWhileSelector('div.spinner');
            I.saveScreenshot('02_01_02_spinnerGone.png');
            I.waitForVisible('div > div.nav.nav-header.user > ul > li > a');
            I.saveScreenshot('02_01_03_ICannSee.png');
            I.click('div > div.nav.nav-header.user > ul > li > a');
            I.saveScreenshot('02_01_04Hopeclicked.png');
        });
    },
    
    cleanCache() {
        let _this = this;
        within(this.root, function() {
            _this._openMenu();
            I.waitForVisible('#cache');
            I.click('#cache');
        });
    },
    
    logout() {
        let _this = this;
        within(this.root, function() {
            I.saveScreenshot('02_01_Logout.png');
            I.saveScreenshot('02_01_01_spinner.png');
            I.waitWhileSelector('div.spinner');
            I.saveScreenshot('02_01_02_spinnerGone.png');
            I.waitForVisible('div > div.nav.nav-header.user > ul > li > a');
            I.saveScreenshot('02_01_03_ICannSee.png');
            I.click('div > div.nav.nav-header.user > ul > li > a');
            I.saveScreenshot('02_01_04Hopeclicked.png');
            I.saveScreenshot('02_02_Logout.png');
            I.waitForVisible('#logout');
            I.saveScreenshot('02_03_Logout.png');
            I.click('#logout');
            I.saveScreenshot('02_04_Logout.png');
        });
    },
    
    impersonate() {
        let _this = this;
        within(this.root, function() {
            _this._openMenu();
            I.waitForVisible('#impersonate');
            I.click('#impersonate');
        });
    },
    
};
