// conf.js
exports.config = {
  framework: 'jasmine2',
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  
  specs: ['allegro_spec.js'],
  
  multiCapabilities: [{
	  	seleniumAddress: 'http://localhost:4444/wd/hub',
	    'browserName': 'chrome',
	    specs: 'allegro_spec.js'
	  }, 
	  /*{
		  seleniumAddress: 'http://127.0.0.1:4723/wd/hub',
		  'browserName': 'Browser',
	      'appium-version': '1.4.0.0', 
	      'platformName':'Android',
	      'platformVersion': '6.0',
	      'deviceName': 'Android Emulator',
	       fullReset: 'true',
	    specs: 'allegro_spec_android.js'
	  }*/],

  params: require('./peopledata.json'),
  allScriptsTimeout: 20000,
  jasmineNodeOpts: {defaultTimeoutInterval: 70000}

};
//exports.config = {
//		  framework: 'jasmine2',
//		  seleniumAddress: 'http://localhost:4444/wd/hub',
//		  specs: ['spec.js'],
//		  capabilities: {
//		       'browserName': 'chrome',
//		       'chromeOptions': {
//		       'args': ['show-fps-counter=true'],
//		       'mobileEmulation' : {
//		        'deviceName': 'Apple iPhone 6'
//		       }
//		   }
//		  }


