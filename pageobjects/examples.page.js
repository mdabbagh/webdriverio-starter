import Page from './page';

class ExamplesPage extends Page {
  // Chaining finds
  navLink(linkText='') {
    return $('.nav-site').$('a='+linkText);
  }
}

export default new ExamplesPage();