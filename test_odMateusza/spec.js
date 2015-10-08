// spec.js
describe('Protractor Demo App', function() {
	var expects = {
			large: {
				leftHeaderText: "OUR PRODUCTS",
				salesLabel: "Sales",
				serviceLabel: "Service",
				marketingLabel: "Marketing",
				servicePageMainText: "Support every customer.\nAnytime. Anywhere.",
				serviceButtonText: "TRY FOR FREE"
			},
			small: {
				leftHeaderText: "PRODUCTS",
				salesLabel: "Sales force automation and CRM",
				serviceLabel: "Customer service, support, and help desk",
				marketingLabel: "Email, mobile, social, and web marketing.",
				servicePageMainText: "Support every customer.\nEvery day.",
				serviceButtonText: "TRY FOR FREE"
			}
	}

	var verifyMenuLabels = function(page) {
		expect(page.leftMenuHeader).toEqual(expectations.leftHeaderText);
		expect(page.salesText).toEqual(expectations.salesLabel);
		expect(page.serviceText).toEqual(expectations.serviceLabel);
		expect(page.marketingText).toEqual(expectations.marketingLabel);
	}
	
	var verifyServiceHeaderLabels = function(page) {
		expect(page.mainText()).toEqual(expectations.servicePageMainText);
		expect(page.tryItButtonText()).toEqual(expectations.serviceButtonText);
	}
	
	var MainPage;
	var expectations;
	var width;
	var height;

	if (browser.params.mode === 'lo-res') {
		MainPage = require('./mainPage.small.js');
		expectations = expects.small;
		width = 360;
		height = 640;
	} else {
		MainPage = require('./mainPage.js');
		expectations = expects.large;
		width = 1024;
		height = 768;
	}
	if (browser.params.timeout != undefined) {
		jasmine.DEFAULT_TIMEOUT_INTERVAL = browser.params.timeout;
	}
	
	beforeEach(function() {
		browser.driver.manage().window().setSize(width, height);
		browser.driver.ignoreSynchronization = true;
	});
	
	it('should check site', function() {
		var mainPage = new MainPage();
		mainPage.open();
		verifyMenuLabels(mainPage);
		var servicePage = mainPage.goToService();
		verifyServiceHeaderLabels(servicePage);
		var userForm = servicePage.clickTryIt();
		userForm.fillFirstName("Zenobia")
			.fillLastName("Smith")
			.fillTitle("VP")
			.fillEmail("zen.smith@arroyo.com")
			.fillPhone("+44182457914")
			.fillCompany("Arroyo")
			.fillCaptcha("2q8j91")
			.submit();
		userForm.waitForLicenseErrorVisible();
		expect(userForm.isLicenseErrorPresent()).toBeTruthy();
		userForm.markLicenseAgreement().submit();
		browser.driver.sleep(3000);
		expect(userForm.isLicenseErrorPresent()).toBeFalsy();
	});

});