'use strict';

var Helper = require('./helper.js');

var helper = new Helper();

var fillInput = function(inputId, text) {
	var locator = by.id(inputId);
	var elem = browser.driver.findElement(locator);
	elem.clear();
	elem.sendKeys(text);
}

var FreeTrialPage = function () {
	helper.waitForElementPresent(by.id('form-container'));
};

FreeTrialPage.prototype  = Object.create({}, {
	fillFirstName: {
		value: function(firstname) {
			fillInput("UserFirstName", firstname);
			return this;
		}
	},
	fillLastName: {
		value: function(lastname) {
			fillInput("UserLastName", lastname);
			return this;
		}
	},
	fillTitle: {
		value: function(title) {
			fillInput("UserTitle", title);
			return this;
		}
	},
	fillEmail: {
		value: function(email) {
			fillInput("UserEmail", email);
			return this;
		}
	},
	fillPhone: {
		value: function(phone) {
			fillInput("UserPhone", phone);
			return this;
		}
	},
	fillCompany: {
		value: function(company) {
			fillInput("CompanyName", company);
			return this;
		}
	},
	fillCaptcha: {
		value: function(captcha) {
			fillInput("CaptchaResponse", captcha);
			return this;
		}
	},
	markLicenseAgreement: {
		value: function() {
			var locator = by.id("SubscriptionAgreement");
			var elem = browser.driver.findElement(locator);
			elem.click();
			return this;
		}
	},
	submit: {
		value: function() {
			var locator = by.xpath("//div/a[contains(@class, 'submit')]");
			var elem = browser.driver.findElement(locator);
			elem.click();
		}
	},
	isLicenseErrorPresent: {
		value: function() {
			var errMsgLocator = by.xpath("//*[@id='SubscriptionAgreement']/following-sibling::span[contains(@class, 'msg-error')]");
			return browser.driver.findElement(errMsgLocator).isDisplayed();
		}
	},
	waitForLicenseErrorPresent: {
		value: function() {
			var errMsgLocator = by.xpath("//*[@id='SubscriptionAgreement']/following-sibling::span[contains(@class, 'msg-error')]");
			helper.waitForElementPresent(errMsgLocator);
		}
	},
	waitForLicenseErrorVisible: {
		value: function() {
			var errMsgLocator = by.xpath("//*[@id='SubscriptionAgreement']/following-sibling::span[contains(@class, 'msg-error')]");
			helper.waitForElementVisible(errMsgLocator);
		}
	},
	isFieldInvalid: {
		value: function(name) {
			var errMsgLocator = by.xpath("//input[@name='" + name + "']/following-sibling::span[contains(@class, 'form-field-error')]");
			return browser.driver.findElement(errMsgLocator).isDisplayed();
		}
	}
});

module.exports = FreeTrialPage;