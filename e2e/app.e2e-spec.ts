import { FirebaseNgTutorialPage } from './app.po';

describe('firebase-ng-tutorial App', () => {
  let page: FirebaseNgTutorialPage;

  beforeEach(() => {
    page = new FirebaseNgTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
