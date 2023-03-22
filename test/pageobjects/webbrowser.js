const ActionHelper = require('../helpers/actionHelpers')

let elements
const locators = {

    'android':{
        'webBtn':`~Webview`,
        'getStartedBtn':`//a[text()='Get Started']`,
        'assertGetStarted':`//h1[text()='Getting Started']`,
        'homeBtn':`[class='breadcrumbHomeIcon_OVgt']`,
        'webdriverioBtn':`//a[text()='Why WebdriverIO?']`,
        'assertWebdriverio':`//h1[text()='Why Webdriver.IO?']`,
        'githubBtn':`//a[text()='View on GitHub']`
    },
    'ios':{
        'webBtn':`~Webview`,
        'getStartedBtn':`//XCUIElementTypeStaticText[@name="Get Started"]`,
        'assertGetStarted':`(//XCUIElementTypeStaticText[@name="Getting Started"])[2]`,
        'homeBtn':`~Home page`,
        'webdriverioBtn':`//XCUIElementTypeStaticText[@name="Why WebdriverIO?"]`,
        'assertWebdriverio':`(//XCUIElementTypeStaticText[@name="Why Webdriver.IO?"])[2]`,
        'githubBtn':`//XCUIElementTypeStaticText[@name="View on GitHub"]`,
        'githubAssertion' : `//XCUIElementTypeStaticText[@name="WebdriverIO"]`,
        'clickHomeBTN' :`~Home`
    }
}

ActionHelper.isPlatformAndroid() ? elements = locators.android : elements = locators.ios


class webbrowser{

    static webBtn(){return $(elements.webBtn)}
    static getStartedBtn(){return $(elements.getStartedBtn)}
    static assertGetStarted(){return $(elements.assertGetStarted)}
    static homeBtn(){return $(elements.homeBtn)}
    static webdriverioBtn(){return $(elements.webdriverioBtn)}
    static assertWebdriverio(){return $(elements.assertWebdriverio)}
    static githubBtn(){return $(elements.githubBtn)}
    static githubAssertion(){return $(elements.githubAssertion)}
    static clickHomeBTN(){return $(elements.clickHomeBTN)}
    
}
module.exports = webbrowser; 