let environment = casper.cli.get('env');

if (!environment) {
    console.log('Usage: "casperjs test --env=<env> <scenario.js>"', 'We will use default');
    environment = 'default';
}

console.log('Loading the ' + environment + ' config.');

let environmentConfig = require('./env/' + environment + '.js');
module.exports = environmentConfig;