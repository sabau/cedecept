Feature('Login');

Scenario('Simple Login', (I, loginPage, mainMenuFragment) => {
    "use strict";
    I.amOnPage('/common/login.html');
    loginPage.sendForm('cfp\\lundbeck.tbadmin', 'be careful');
    mainMenuFragment.isLoaded();
    //I.amOnPage('/common/index.html');
});

Scenario('Login and Logout', (I, loginPage, mainMenuFragment, navbarFragment) => {
    "use strict";
    I.amOnPage('/common/login.html');
    loginPage.sendForm('cfp\\lundbeck.tbadmin', 'be careful');
    mainMenuFragment.isLoaded();
    navbarFragment.logout();
    loginPage.isLoaded();
});
//
// Scenario('Bad Login', (I, loginPage, mainMenuFragment) => {
//     "use strict";
//     I.amOnPage('/common/login.html');
//     loginPage.sendForm('ME_NO_EXISTS', 'be careful');
//     loginPage.isLoaded();
//     //assert.equal(loginPage.getError(), 'Invalid Credentials');
// });