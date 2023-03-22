
const { config } = require('../config/wdio.conf');
config.specs= [
    '../test/specs/**/**.js'
]
// config.services = ['appium']
config.port = 4723
config.path = '/wd/hub'
config.capabilities = [{
    maxInstances: 1,
    "platformName": "android",
    "appium:platformVersion": "11.0",
    "appium:deviceName": "emulator-5554",
    'appium:appName' : 'Android-NativeDemoApp-0.4.0.apk',
        "appium:appPackage": "com.wdiodemoapp",
        "appium:appActivity": ".MainActivity"
    }]
exports.config = config;