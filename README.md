# WebDriverIO Template

## Summary

This is a WebDriverIO v5 template project that utilizes a common setup and some best practices to get you started quickly.

Included best practices:

* Page Object Model
* Common helper methods
* Screenshots on failure
* Support for multiple run configurations (using multiple wdio.conf files) - For example, running locally or within Docker or using cross-browser testing services like BrowserStack
* Support for multiple browsers

Included tools/libraries:

* Mocha test framework
* JUnit reporter to generate XML reports for CI integration
* Spec reporter to output test results to the console
* Babel for ES6 support
* Selenium-Standalone Service to easily run tests with multiple browsers without needing to configure WebDrivers

**This repository also includes useful examples found in 'example(s)' files.**

## Setup

1. Download code (either via Git or download the folder in BitBucket)
2. Navigate into folder
3. npm i --save-dev

## Usage

To run all tests in the specs folder:

```bash
npm run testlocal
```

To run a specific category of tests across all spec files:

```bash
./node_modules/.bin/wdio wdio.conf.local.js --mochaOpts.grep=@smoke
```

By default, the tests run with Chrome. In order to run with a different browser, pass a BROWSER environment variable.

```bash
BROWSER=firefox ./node_modules/.bin/wdio wdio.conf.local.js
```

## Contributing

If you'd like to extend or update the template:

1. Clone the repository
2. Create a branch
3. Make your updates in the branch
4. Create a PR
5. Once PR is approved, it will be merged
