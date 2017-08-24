Feature('Login');

Scenario('Simple Login', (I, loginPage, mainMenuFragment) => {
    "use strict";
    I.amOnPage('/common/login.html');
    loginPage.sendForm('cfp\\lundbeck.tbadmin', 'be careful');
    I.saveScreenshot('01_loggingIn.png');
    mainMenuFragment.isLoaded();
    I.saveScreenshot('01_loggedIn.png');
    I.amOnPage('/common/index.html');
});

Scenario('Login and Logout', (I, loginPage, mainMenuFragment, navbarFragment) => {
    "use strict";
    I.amOnPage('/common/login.html');
    I.saveScreenshot('02_00StartloggingIn.png');
    loginPage.sendForm('cfp\\lundbeck.tbadmin', 'be careful');
    I.saveScreenshot('02_loggingIn.png');
    mainMenuFragment.isLoaded();
    I.saveScreenshot('02_loggedIn.png');
    navbarFragment.logout();
    I.saveScreenshot('02_logOut.png');
    loginPage.isLoaded();
    I.amOnPage('/common/login.html');
});
//
// Scenario('Bad Login', (I, loginPage, mainMenuFragment) => {
//     "use strict";
//     I.amOnPage('/common/login.html');
//     loginPage.sendForm('ME_NO_EXISTS', 'be careful');
//     loginPage.isLoaded();
//     //assert.equal(loginPage.getError(), 'Invalid Credentials');
// });