import { Newa2Page } from './app.po';

describe('newa2 App', function() {
  let page: Newa2Page;

  beforeEach(() => {
    page = new Newa2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
