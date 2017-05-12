import { NgLoadingMaskPage } from './app.po';

describe('ng-loading-mask App', function() {
  let page: NgLoadingMaskPage;

  beforeEach(() => {
    page = new NgLoadingMaskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
