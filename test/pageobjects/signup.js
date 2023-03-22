
const ActionHelper = require('../helpers/actionHelpers')

let elements
const locators = {

    'android':{
        'loginBtn':`//android.widget.Button[contains(@index,'2')]`,
        'signupbtn':`~button-sign-up-container`,
        'email':`//android.widget.EditText[contains(@text,'Email')]`,
        'password':`~input-password`,
        'repeatPassword':`~input-repeat-password`,
        'clickSignup':`//android.widget.TextView[contains(@text,'SIGN UP')]`,
        'clickPopup':`//android.widget.Button[contains(@text,'OK')]`
    },
    'ios':{
        'loginBtn':`//XCUIElementTypeButton[@name="Login"]`,
        'signupbtn':`//XCUIElementTypeStaticText[@name="Sign up"]`,
        'email':`//XCUIElementTypeTextField[@name="input-email"]`,
        'password':`//XCUIElementTypeSecureTextField[@name="input-password"]`,
        'repeatPassword':`//XCUIElementTypeSecureTextField[@name="input-repeat-password"]`,
        'clickSignup':`(//XCUIElementTypeOther[@name="SIGN UP"])[2]`,
        'clickPopup':`//XCUIElementTypeButton[@name="OK"]`
    }
}

ActionHelper.isPlatformAndroid() ? elements = locators.android : elements = locators.ios



class signup {
    
    static loginBtn(){return $(elements.loginBtn)}
    static signupbtn(){return $(elements.signupbtn)}
    static email(){return $(elements.email)}
    static password(){return $(elements.password)}
    static repeatPassword(){return $(elements.repeatPassword)}
    static clickSignup(){return $(elements.clickSignup)}
    static clickPopup(){return $(elements.clickPopup)}

}
module.exports = signup; 