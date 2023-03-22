
const { config } = require('../config/wdio.conf');
config.specs= [
    '../test/specs/**/**.js'
]


// config.services = ['appium']
config.port = 4723
config.path = '/wd/hub'
config.capabilities = [{
    "platformName": "iOS",
    "appium:platformVersion": "15.2",
    "appium:deviceName": "iPhone 13 Pro Max",
    "appium:udid": "F6AAC67B-7960-4918-8FE2-118F5D1A19B5",
    "appium:automationName": "XCUITest",
    "appium:app": "/Users/imac/Downloads/wdioNativeDemoApp.app"
  }]
exports.config = config;