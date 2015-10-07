// conf.js
exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo_spec.js'],
  capabilities : {
		'browserName' : 'chrome',
		'chromeOptions' : {
			'mobileEmulation' : {
				'deviceName' : 'Apple iPhone 6'
			}
		}

	},
  params: require('./peopledata.json'),
  allScriptsTimeout: 20000,
  jasmineNodeOpts: {defaultTimeoutInterval: 70000}

};