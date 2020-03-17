const deepmerge = require('deepmerge');
const wdioConf = require('./wdio.conf.main.js');

// This is a setup for running tests against a public site. You can find examples for different 
// configurations here https://github.com/stsvilik/wdio-docker-service/wiki
exports.config = deepmerge(wdioConf.config, {
    hostname: 'localhost',
    baseUrl: "https://webdriver.io",

    services: ['docker'],
    dockerOptions: {
        image: 'selenium/standalone-chrome',
        healthCheck: 'http://localhost:4444',
        options: {
            p: ['4444:4444'],
            shmSize: '2g'
        }
    },
    
    capabilities: [{
        acceptInsecureCerts: true,
        browserName: 'chrome'
    }],
}, { clone: false });