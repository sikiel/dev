'use strict';

var Helper = require('./helper.js');
var ServicePage = require('./servicePage.small.js');

var helper = new Helper();

var menuPath = "//div[@id='productsId']";
var pageLoadedCondition = by.id('mobileNavigation');

var menuOpen = false;

var slideMenuWhenClosed = function() {
	if (!menuOpen) {
		var menuButton = browser.driver.findElement(by.xpath("//div[@id='mobileNavigation']/div/span"));
		menuButton.click();
		helper.waitForElementVisible(service.link.locator);
		menuOpen = true;
	}
}

var menuLink = function(order) {
	var path = menuPath + "/ul/li[" + order + "]";
	return {
		locator: by.xpath(path),
		link: {locator: by.xpath(path + "//a")},
		label: {locator: by.xpath(path + "/a/span[2]/span")},
		getText: function() {
			slideMenuWhenClosed();
			return browser.driver.findElement(this.label.locator).getText();
		}
	}
}

var sales = menuLink(1);
var service = menuLink(2);
var marketing = menuLink(3);

var MainPage = function () {
};

MainPage.prototype  = Object.create({}, {
	open: {
		value: function() {
			browser.driver.get("https://www.salesforce.com/uk/");
			helper.waitForElementPresent(pageLoadedCondition);
		}
	},
	goToService : {
		value: function() {
			slideMenuWhenClosed();
			var serviceLink = browser.driver.findElement(service.link.locator);
			serviceLink.click();
			return new ServicePage();
		}
	},
	leftMenuHeader: { 
		get: function () {
			slideMenuWhenClosed();
			return browser.driver.findElement(by.xpath("//div[contains(@class, 'menuContainer')]//div[contains(@class, 'section-header')]/span")).getText();
		} 
	},
	salesText: { 
		get: function () {
			return sales.getText();
		} 
	},
	serviceText: { 
		get: function () {
			return service.getText();
		} 
	},
	marketingText: { 
		get: function () {
			return marketing.getText();
		} 
	}
	
});

module.exports = MainPage;
