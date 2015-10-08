'use strict';

var Helper = require('./helper.js');
var FreeTrialPage = require('./freeTrialPage.js');

var helper = new Helper();

var tryItLocator = by.xpath("//div[contains(@class, 'benefit-cta-container') and contains(@class, 'last')]/a[2]");
var scrollDown = "document.evaluate('//div[contains(@class, \"benefit-cta-container\") and contains(@class, \"last\")]/a[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.scrollIntoView();";

var ServicePage = function () {
	helper.waitForElementPresent(tryItLocator);
};

ServicePage.prototype  = Object.create({}, {
	mainText: {
		value: function() {
			var locator = by.xpath("//div[@id='layout']//div[contains(@class, 'cell-content')]//div[contains(@class, 'gutter')]//h1");
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
			browser.driver.executeScript(scrollDown);
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