const deepmerge = require('deepmerge');
const wdioConf = require('./wdio.conf.main.js');

exports.config = deepmerge(
	wdioConf.config,
	{
		// BrowserStack creds, make sure these environment variables are set
		user: process.env.BSTACK_USERNAME,
		key: process.env.BSTACK_KEY,

    // NOTE: Make sure to install the browserstack service before using this config
    services: ['browserstack'],
    // This can be something else depending where you want to run tests
    // For example, it could be a webdriver-staging.io url where your site is reachable via the Internet
		baseUrl: 'https://webdriver.io',

		capabilities: [
			{
				maxInstances: 1,
				project: 'Test Project',
				os: 'Windows',
				os_version: '10',
				browserName: 'Edge',
				browser_version: '18',
				resolution: '1920x1080',
				'browserstack.debug': true
			},
			{
				maxInstances: 1,
				project: 'Test Project',
				os: 'OS X',
				os_version: 'Mojave',
				browserName: 'Chrome',
				resolution: '1920x1080',
				'browserstack.debug': true
			}
		]
	},
	{ clone: false }
);