// conf.js
exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo_spec.js'],
  capabilities: {
    browserName: 'chrome'
  },
  params: require('./peopledata.json'),
}