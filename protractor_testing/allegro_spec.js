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
	

	it('should try to search in max', function() {
		
		for(i = 0; i < listaZakupow.zakupy.length; i++){
				
			mainSearch.sendKeys(listaZakupow.zakupy[i].nazwa);
			element(by.css('.sprite.search-btn')).click();
			
			browser.ignoreSynchronization = true;
			//expect(element(by.id('offers-params')).isPresent()).toBe(false);
			
			if("price_to" in listaZakupow.zakupy[i])
			{
				element(by.id('price_to')).sendKeys(listaZakupow.zakupy[i].price_to)
			}
			mainSearch.clear();
		}


        });
		
		it('should try to search in min', function() {
		browser.driver.manage().window().setSize(600, 600);
		for(i = 0; i < listaZakupow.zakupy.length; i++){
				
			mainSearch.sendKeys(listaZakupow.zakupy[i].nazwa);
			element(by.css('.sprite.search-btn')).click();
			
			browser.ignoreSynchronization = true;
			mainSearch.clear();

			expect(element(by.id('offers-params')).isPresent()).toBe(true);
			element(by.id('offers-params')).click();
			
			if("price_to" in listaZakupow.zakupy[i])
			{
				element(by.id('price_to')).sendKeys(listaZakupow.zakupy[i].price_to)
			}
			element(by.buttonText('ukryj filtry')).click();
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