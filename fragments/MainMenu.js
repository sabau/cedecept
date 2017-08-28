
'use strict';

let I;

module.exports = {
    
    _init() {
        I = require('../steps_file.js')();
    },
    
    root: '#sidebar-left',
    menu: '#menuContent',
    
    clickMenu(menu, submenu) {
        within(this.root, function() {
            I.click({css: '#menuContent > ul > li[name="' + menu + '"] > a'});
            if (submenu) {
                I.seeElement('#menuContent > ul > li[name="' + menu + '"] > ul.sub-menu > li[name="' + submenu + '"] > a');
                I.click({css: '#menuContent > ul > li[name="' + menu + '"] > ul.sub-menu > li[name="' + submenu + '"] > a'});
            }
        });
    },
    
    isLoaded() {
        let _this = this;
        I.waitForElement(this.root);
        within(this.root, function() {
            I.waitForElement(_this.menu);
        });
    }
};
