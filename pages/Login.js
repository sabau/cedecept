
'use strict';

let I;

module.exports = {
    
    _init() {
        I = require('../steps_file.js')();
    },
    
    // setting locators
    root: '#login-form',
    fields: {
        user: 'input#user',
        password: 'input#password',
        error: 'p#error'
    },
    submitButton: {
        css: '#login'
    },
    
    // introducing methods
    sendForm(user, password) {
        I.waitForVisible(this.root);
        I.fillField(this.fields.user, user);
        I.fillField(this.fields.password, password);
        I.click(this.submitButton);
    },
    
    isLoaded() {
        I.waitForElement(this.root);
    },
    
    getError() {
        I.waitForVisible(this.fields.error);
        return I.getText(this.fields.error)
    }
};
