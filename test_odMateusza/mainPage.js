'use strict';

var Helper = require('./helper.js');
var ServicePage = require('./servicePage.js');

var helper = new Helper();

var menuPath = "//div[@id='layout']//div[contains(@class, 'left-nav')]";
var pageLoadedCondition = by.xpath(menuPath);

var menuLink = function(order) {
	var path = menuPath + "/ul/li[" + order + "]";
	return {
		locator: by.xpath(path),
		link: {locator: by.xpath(path + "//a")},
		label: {locator: by.xpath(path + "//span[contains(@class, 'title')]")},
		getText: function() {
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
			var serviceLink = browser.driver.findElement(service.link.locator);
			serviceLink.click();
			return new ServicePage();
		}
	},
	leftMenuHeader: { 
		get: function () {
			return browser.driver.findElement(by.xpath(menuPath + "/h2[1]")).getText();
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
