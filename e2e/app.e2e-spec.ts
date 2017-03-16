import { TemplateMahdiPage } from './app.po';

describe('template-mahdi App', function() {
  let page: TemplateMahdiPage;

  beforeEach(() => {
    page = new TemplateMahdiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
