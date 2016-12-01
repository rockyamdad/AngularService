import { ServiceExamplePage } from './app.po';

describe('service-example App', function() {
  let page: ServiceExamplePage;

  beforeEach(() => {
    page = new ServiceExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
