describe('Testing allegro page', function() {
	var zaloguj = element(by.linkText('zaloguj'));
	var mainSearch = element(by.id('main-search-text'));
	var listaZakupow = require('./zakupy.json');

	beforeEach(function() {
		browser.debugger();
		browser.ignoreSynchronization = false;
		browser.driver.manage().window().maximize();
		browser.get('http://allegro.pl/cart');

	});

	
	function set_params( i){
		for(property in listaZakupow.zakupy[i]){
		if (property != "nazwa" & property != "kategoria") {
			element(by.id(property)).sendKeys(
					listaZakupow.zakupy[i][property]);
		}
				
			
		}
	}
	function main_search(i){
		mainSearch.sendKeys(listaZakupow.zakupy[i].nazwa);
		element(by.css('.sprite.search-btn')).click();

		browser.ignoreSynchronization = true;
	}
	it('should try to search for shopping in max window', function() {
		
		for (zakup in listaZakupow.zakupy) {
			main_search(zakup);
			expect(element(by.id('offers-params')).isPresent()).toBe(false);
			set_params(zakup);
			mainSearch.clear();
		}

	});

	it('should try to search for shopping in min window', function() {
		browser.driver.manage().window().setSize(600, 600);
		for (zakup in listaZakupow.zakupy) {

			main_search(zakup);

			expect(element(by.id('offers-params')).isPresent()).toBe(true);
			element(by.id('offers-params')).click();
			
			set_params(zakup);

			element(by.buttonText('ok')).click();
			
			mainSearch.clear();

		}

	});
	function logowanie() {
		zaloguj.click();
		browser.ignoreSynchronization = true;
		browser.driver.findElement(by.id('userForm_login')).sendKeys(
				browser.params.people[1].username);
		browser.driver.findElement(by.id('userForm_password')).sendKeys(
				browser.params.people[1].password);
		element(by.partialButtonText('Zaloguj s')).click();
		expect(element(by.css('.alert.alert-danger')).isPresent()).toBe(true);
		expect(element(by.css('.errors')).isPresent()).toBe(true);
	}
	;

	it('should login to max page', function() {

		expect(zaloguj.isPresent()).toBe(true);
		logowanie();

	});
	it('should login to min page', function() {
		browser.driver.manage().window().setSize(800, 600);
		
		expect(zaloguj.isPresent()).toBe(false);
		element(by.css('.btn.btn-default.navigation-toggle')).click();
		expect(zaloguj.isPresent()).toBe(true);
		logowanie();
	});

});