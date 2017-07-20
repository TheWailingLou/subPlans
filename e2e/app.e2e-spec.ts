import { SubPlansPage } from './app.po';

describe('sub-plans App', () => {
  let page: SubPlansPage;

  beforeEach(() => {
    page = new SubPlansPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
