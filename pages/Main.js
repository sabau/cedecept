
'use strict';

let I;

module.exports = {
    
    _init() {
        I = require('../steps_file.js')();
    },
    
    root: '#login-form',
    fields: {
        user: 'input#user',
        password: 'input#password',
        error: 'p#error'
    },
    submitButton: {
        css: '#login'
    },
    //#main-menu-toggle
    
    // insert your locators and methods here
};
