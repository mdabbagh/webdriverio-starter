import assert from 'assert';
import HomePage from '../pageobjects/home.page';
import ExamplesPage from '../pageobjects/examples.page';

describe('categories example', () => {
  beforeEach(function() {
    HomePage.open();
  });

  // Passing variable to an element find method, see /pageobjects/examples.page.js
  it('should load Guide page on nav click', () => {
    ExamplesPage.navLink('Guide').click();
    assert.ok((browser.getTitle()).includes('Getting'));
  });

  // Using categories ('@smoke' in this example), see README.md for example command
  it('should load API page on nav click @smoke', () => {
    ExamplesPage.navLink('API').click();
    assert.ok((browser.getTitle()).includes('API'));
  });
});