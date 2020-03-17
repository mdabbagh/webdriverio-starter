import assert from 'assert';
import HomePage from '../pageobjects/home.page';
import { waitUntilUrlIncludes } from '../helpers/helper.waits';

describe('home page', () => {
  beforeEach(function() {
    HomePage.open();
    waitUntilUrlIncludes("webdriver"); // Not needed. Just showing how to use waits
  });

  it('should load home page successfully', () => {
    assert.strictEqual(HomePage.title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
  });
});