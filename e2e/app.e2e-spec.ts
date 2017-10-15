import { PosePage } from './app.po';

describe('pose App', () => {
  let page: PosePage;

  beforeEach(() => {
    page = new PosePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
