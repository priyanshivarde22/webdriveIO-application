const ActionHelper = require('../helpers/actionHelpers')

let elements
const locators = {
    'android':{
        'loginBtn':'~button-login-container',
        'email':`//android.widget.EditText[contains(@content-desc,'input-email')]`,
        'password':`//android.widget.EditText[contains(@content-desc,'input-password')]`,
        'clickLogin':`//android.widget.TextView[contains(@text,'LOGIN')]`,
        'loginPopup':`//android.widget.Button[contains(@text,'OK')]`
    },
    'ios':{
        'loginBtn':'//XCUIElementTypeStaticText[@name="Login"]',
        'email':`//XCUIElementTypeTextField[@name="input-email"]`,
        'password':`//XCUIElementTypeSecureTextField[@name="input-password"]`,
        'x' :`~When the device has Touch/FaceID (iOS) or FingerPrint enabled a biometrics button will be shown to use and test the login.`,
        'clickLogin':`(//XCUIElementTypeOther[@name="LOGIN"])[2]`,
        'loginPopup':`//XCUIElementTypeButton[@name="OK"]`
    }
}

ActionHelper.isPlatformAndroid() ? elements = locators.android : elements = locators.ios


class login{

    static loginBtn(){return $(elements.loginBtn)}
    static email(){return $(elements.email)}
    static password(){return $(elements.password)}
    static x(){return $(elements.x)}
    static clickLogin(){return $(elements.clickLogin)}
    static loginPopup(){return $(elements.loginPopup)}
}
module.exports = login; 