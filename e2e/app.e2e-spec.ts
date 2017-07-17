import { ZrihtiAppPage } from './app.po';

describe('zrihti-app App', () => {
  let page: ZrihtiAppPage;

  beforeEach(() => {
    page = new ZrihtiAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
