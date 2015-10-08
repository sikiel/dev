// conf.js
exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  params: {
	mode: 'lo-res'
  },
  capabilities: {
	  'browserName': 'chrome',
	  'chromeOptions': {
		'args': ['show-fps-counter=true'],
		'mobileEmulation' : {
		  'deviceName': 'Apple iPhone 6'
		}
	  }
  }
}