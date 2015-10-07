
var zaloguj = element(by.linkText('zaloguj'));

export.logowanie = function() {
	zaloguj.click();
	browser.ignoreSynchronization = true;
	browser.driver.findElement(by.id('userForm_login')).sendKeys(
			browser.params.people[1].username);
	browser.driver.findElement(by.id('userForm_password')).sendKeys(
			browser.params.people[1].password);
	element(by.partialButtonText('Zaloguj s')).click();
	expect(element(by.css('.alert.alert-danger')).isDisplayed()).toBe(true);
	expect(element(by.css('.errors')).isDisplayed()).toBe(true);
};