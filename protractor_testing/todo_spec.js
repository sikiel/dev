// spec.js
describe('Protractor Demo App', function() {
  var username = element(by.model('vm.username'));
  var password = element(by.model('vm.password'));
  var loginButton = element(by.css('.btn.btn-primary'));

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
		for(i = 0; i<browser.params.people.length; i++) {
    
		username.sendKeys(browser.params.people[i].username);
		password.sendKeys(browser.params.people[i].password);
		loginButton.click();
		expect(element(by.binding('flash.message')).getText())
		.toEqual('Username or password is incorrect');
		username.clear();
		password.clear();
		}
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