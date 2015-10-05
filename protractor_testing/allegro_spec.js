describe('Testing allegro page', function()
{
	var zaloguj = element(by.linkText('zaloguj'));
	var mainSearch = element(by.id('main-search-text'));
	var listaZakupow = require('./zakupy.json');
	
	beforeEach(function() {
	    //browser.ignoreSynchronization = true;
		browser.debugger();
		browser.ignoreSynchronization = false;
		browser.driver.manage().window().maximize();
		browser.get('http://allegro.pl/cart');

	});
	

	
	/*it('should login to max page', function() {
				browser.driver.manage().window().maximize();
		browser.get('http://allegro.pl/cart');
		expect(zaloguj.isPresent()).toBe(true);
		expect(element(by.css('.btn.btn-default.navigation-toggle'))).toBe(false);
        //zaloguj.click();
	});
it('login time', function(){_
		//browser.ignoreSynchronization = true;
		browser.driver.findElement(by.id('userForm_login')).sendKeys(browser.params.people[1].username);
		browser.driver.findElement(by.id('userForm_password')).sendKeys(browser.params.people[1].password);
		element(by.partialButtonText('Zaloguj s')).click();
		expect(browser.driver.findElement(by.css('.alert.alert-danger')).isPresent()).toBe(true);
		expect(browser.driver.findElement(by.css('.errors')).isPresent()).toBe(true);
		browser.ignoreSynchronization = false;
		browser.get('http://allegro.pl/cart');
        });*/
		
	/*it('should login to min page', function() {
				browser.driver.manage().window().maximize();
		browser.get('http://allegro.pl/cart');
		expect(true).toBe(true);
		browser.driver.manage().window().setSize(800, 600);
		expect(zaloguj.isPresent()).toBe(false);
		element(by.css('.btn.btn-default.navigation-toggle')).click();
		expect(zaloguj.isPresent()).toBe(true);
		zaloguj.click();
		element(by.id('userForm_login')).sendKeys(browser.params.people[1].username);
		element(by.id('userForm_password')).sendKeys(browser.params.people[1].password);
		element(by.partialButtonText('Zaloguj s')).click();
		//expect(element(by.css('.alert.alert-danger')).isPresent()).toBe(true);
		//expect(element(by.css('.errors')).isPresent()).toBe(true);
        });	*/
		
		it('should try to search', function() {

		for(i = 0; i < listaZakupow.zakupy.length; i++){
				
			mainSearch.sendKeys(listaZakupow.zakupy[i].nazwa);
			element(by.css('.sprite.search-btn')).click();
			
			browser.ignoreSynchronization = true;
			mainSearch.clear();
		}


        });
		it('should login to max page', function() {
				
		expect(zaloguj.isPresent()).toBe(true);
        zaloguj.click();
		browser.ignoreSynchronization = true;
		browser.driver.findElement(by.id('userForm_login')).sendKeys(browser.params.people[1].username);
		browser.driver.findElement(by.id('userForm_password')).sendKeys(browser.params.people[1].password);
		element(by.partialButtonText('Zaloguj s')).click();
		expect(element(by.css('.alert.alert-danger')).isPresent()).toBe(true);
		expect(element(by.css('.errors')).isPresent()).toBe(true);
	});
	it('should login to min page', function() {
		browser.driver.manage().window().setSize(800, 600);
		expect(zaloguj.isPresent()).toBe(false);
		element(by.css('.btn.btn-default.navigation-toggle')).click();
		expect(zaloguj.isPresent()).toBe(true);
		zaloguj.click()
		browser.ignoreSynchronization = true;;
		element(by.id('userForm_login')).sendKeys(browser.params.people[1].username);
		element(by.id('userForm_password')).sendKeys(browser.params.people[1].password);
		element(by.partialButtonText('Zaloguj s')).click();
		expect(element(by.css('.alert.alert-danger')).isPresent()).toBe(true);
		expect(element(by.css('.errors')).isPresent()).toBe(true);
        });
		

});