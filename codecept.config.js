exports.config = {
    // don't build monolithic configs
    mocha: require('./mocha.conf.js') || {},
    
    output: "logs",
    env:  require('./config/config.js') || {},
    helpers: {
        Nightmare: {
            url: process.env.CODECEPT_URL || "http://127.0.0.1:8080",
            width: 1900,
            height: 1200,
            waitTimeout: 20000,
            waitForAction: 2000,
            waitForTimeout: 20000

            coloredLogs: true,
        }
    },
    include: {
        I: "./steps_file.js",
        loginPage: "./pages/Login.js",
        mainPage: "./pages/Main.js",
        mainMenuFragment: "./fragments/MainMenu.js",
        navbarFragment: "./fragments/Navbar.js"
    },
    bootstrap: false,
    teardown: null,
    hooks: [],
    tests: "tests/*_test.js",
    timeout: 90000,
    name: "codecept"
};