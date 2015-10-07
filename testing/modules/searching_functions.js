//var mainSearch = element(by.id('main-search-text'));
{
export.set_params = function(item) {
	for (property in item) {
		if (property != "nazwa" & property != "kategoria") {
			element(by.id(property)).sendKeys(item[property]);
			browser.driver.sleep(4);
		}

	}
};
export.main_search = function(item) {
	element(by.id('main-search-text')).sendKeys(item.nazwa);
	element(by.css('.sprite.search-btn')).click();

	browser.ignoreSynchronization = true;
	expect(element(by.id('listing-offers')).isDisplayed()).toBe(true);
};
}