// conf.js
exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://127.0.0.1:4723/wd/hub',
  
  specs: ['allegro_spec_android.js'],

  capabilities: {
	
	  'browserName': 'Browser',
    'appium-version': '1.4.0.0', 
    'platformName':'Android',
    'platformVersion': '6.0',
    'deviceName': 'Android Emulator',
     fullReset: 'true'
 },

  params: require('./peopledata.json'),
  allScriptsTimeout: 20000,
  jasmineNodeOpts: {defaultTimeoutInterval: 70000}

};

