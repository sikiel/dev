// spec.js
describe('Protractor Demo App', function() {
  /*var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));*/

  beforeEach(function() {
	  //browser.ignoreSynchronization = true;
	  browser.debugger()
    browser.get('http://run.plnkr.co/plunks/tg25kr/');
  });

  /*it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Plunker - AngularJS User Registration and Login Example')
  });
  it('should render login page when user navigates to login page', function() {
            expect(true).toBe(true);
        });*/
		
	it('should try to login', function()
	{
		element(by.model('vm.username'))
		.sendKeys('agata');
		element(by.model('vm.password'))
		.sendKeys(123);
		element(by.css('.btn.btn-primary'))
		.click();
		expect(element(by.binding('flash.message')).getText())
		.toEqual('Username or password is incorrect');
	});

  /*it('should add one and two', function() {
    firstNumber.sendKeys(1);
    secondNumber.sendKeys(2);

    goButton.click();

    expect(latestResult.getText()).toEqual('3');
  });

  it('should add four and six', function() {
    // Fill this in.
	firstNumber.sendKeys(4);
    secondNumber.sendKeys(6);
	goButton.click();
    expect(latestResult.getText()).toEqual('10');
  });*/
});