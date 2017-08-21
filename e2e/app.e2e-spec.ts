import { Exos1Page } from './app.po';

describe('exos1 App', () => {
  let page: Exos1Page;

  beforeEach(() => {
    page = new Exos1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
