import { MySizePage } from './app.po';

describe('my-size App', function() {
  let page: MySizePage;

  beforeEach(() => {
    page = new MySizePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
