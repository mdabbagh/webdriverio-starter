const deepmerge = require('deepmerge');
const wdioConf = require('./wdio.conf.main.js');

exports.config = deepmerge(
  wdioConf.config,
  {
    // Using standalone to cover various browsers
    port: 4441, // Set port so we don't conflict with other selenium servers
    services: ['selenium-standalone'],
    baseUrl: 'https://webdriver.io',

    capabilities: [
      {
        acceptInsecureCerts: true, // To handle unsecure certs
        browserName: process.env.BROWSER || 'chrome'
      }
    ],

    // Args for standalone service
    seleniumArgs: {
      seleniumArgs: ['-port', '4441'],
      javaArgs: [
        // For Edge
        '-Dwebdriver.edge.driver=C\\Windows\\System32\\MicrosoftWebDriver.exe'
      ]
    }
  },
  { clone: false }
);
