import { browser, element, by } from 'protractor';

export class MySizePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root .login-screen h2')).getText();
  }
}
