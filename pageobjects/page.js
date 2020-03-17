export default class Page {
  constructor() {}
  
  open(path="") {
    browser.url(path);
  }

  get title() { return browser.getTitle(); }
}