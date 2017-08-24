Feature('Login');

Scenario('Simple Login', (I, loginPage, mainMenuFragment) => {
    "use strict";
    I.amOnPage('/common/login.html');
    loginPage.sendForm('cfp\\lundbeck.tbadmin', 'be careful');
    I.amOnPage('/common/index.html');
    mainMenuFragment.isLoaded();
});

// Scenario('Login and Logout', (I, loginPage, mainMenuFragment, navbarFragment) => {
//     "use strict";
//     I.amOnPage('/common/login.html');
//     loginPage.sendForm('cfp\\lundbeck.tbadmin', 'be careful');
//     mainMenuFragment.isLoaded();
//     I.seeInCurrentUrl('/common/index.html');
//     navbarFragment.logout();
//     loginPage.isLoaded();
// });
//
// Scenario('Bad Login', (I, loginPage, mainMenuFragment) => {
//     "use strict";
//     I.amOnPage('/common/login.html');
//     loginPage.sendForm('ME_NO_EXISTS', 'be careful');
//     loginPage.isLoaded();
//     //assert.equal(loginPage.getError(), 'Invalid Credentials');
// });