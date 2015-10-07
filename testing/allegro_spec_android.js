var listaZakupow = require('./zakupy.json');
describe('Testing allegro page',
		function() {
			var zaloguj = element(by.linkText('zaloguj'));
			var mainSearch = element(by.id('main-search-text'));

			beforeEach(function() {
				browser.debugger();
				browser.ignoreSynchronization = false;
				//browser.driver.manage().window().maximize();
				browser.get('http://allegro.pl/cart');
				browser.driver.sleep(10000);

			});
			// searching test
			function set_params(item) {
				for (property in item) {
					if (property != "nazwa" & property != "kategoria") {
						element(by.id(property)).sendKeys(item[property]);
						browser.driver.sleep(4);
					}

				}
			}
			function main_search(item) {
				mainSearch.sendKeys(item.nazwa);
				element(by.css('.sprite.search-btn')).click();

				browser.ignoreSynchronization = true;
				expect(element(by.id('listing-offers')).isDisplayed()).toBe(
						true);
			}

			listaZakupow.zakupy.forEach(function(item) {
				it('should try to search for shopping item in min window',
						function() {

							main_search(item);

							expect(
									element(by.linkText('filtry'))
											.isDisplayed()).toBe(true);
							element(by.linkText('filtry')).click();

							set_params(item);

							if (element(by.buttonText('ok')).isDisplayed()) {
								element(by.buttonText('ok')).click();
							} else if (element(by.id('offers-params'))
									.isDisplayed()) {
								element(by.id('offers-params')).click();
							}

							mainSearch.clear();

						});
			});
			// logging test
			function logowanie() {
				zaloguj.click();
				browser.ignoreSynchronization = true;
				browser.driver.findElement(by.id('userForm_login')).sendKeys(
						browser.params.people[1].username);
				browser.driver.findElement(by.id('userForm_password'))
						.sendKeys(browser.params.people[1].password);
				element(by.partialButtonText('Zaloguj s')).click();
				expect(element(by.css('.alert.alert-danger')).isDisplayed())
						.toBe(true);
				expect(element(by.css('.errors')).isDisplayed()).toBe(true);
			}
			;
			it('should login to min page', function() {
				//browser.driver.manage().window().setSize(800, 600);

				expect(zaloguj.isPresent()).toBe(false);
				element(by.css('.btn.btn-default.navigation-toggle')).click();
				expect(zaloguj.isPresent()).toBe(true);
				logowanie();
			});

		});