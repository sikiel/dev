'use strict';

var Helper = require('./helper.js');
var FreeTrialPage = require('./freeTrialPage.js');

var helper = new Helper();

var tryItLocator = by.xpath("//div[contains(@class, 'hero-bgclr-inner')]/p/a[2]");


var ServicePage = function () {
	helper.waitForElementPresent(tryItLocator);
};

ServicePage.prototype  = Object.create({}, {
	mainText: {
		value: function() {
			var locator = by.xpath("//div[contains(@class, 'hero-bgclr-inner')]/h1");
			return browser.driver.findElement(locator).getText();
		}
	},
	tryItButtonText: {
		value: function() {
			return browser.driver.findElement(tryItLocator).getText();
		}
	},
	clickTryIt: {
		value: function() {
		var link = browser.driver.findElement(tryItLocator);
		link.click();
		browser.driver.sleep(1000);
		
		browser.driver.getAllWindowHandles().then(function(tabs) {
			browser.driver.switchTo().window(tabs[tabs.length - 1]);
		});
		
		return new FreeTrialPage();
		}
	}
	
});

module.exports = ServicePage;