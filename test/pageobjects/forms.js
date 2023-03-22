

const ActionHelper = require('../helpers/actionHelpers')

let elements
const locators = {

    'android':{
        'formBtn':`//android.widget.TextView[contains(@text,'Forms')]`,
        'inputField':`//android.widget.EditText[contains(@content-desc,'text-input')]`,
        'switch':`//android.widget.Switch[contains(@content-desc,'switch')]`,
        'clickDropDown':`//android.widget.EditText[contains(@text,'Select an item...')]`,
        'selectOption':`//android.widget.CheckedTextView[contains(@text,'Appium is awesome')]`,
        'clickActive':`~button-Active`,
        'confirmation':`//android.widget.Button[contains(@resource-id,'android:id/button1')]`
    },
    'ios':{
        'formBtn':`//XCUIElementTypeButton[@name="Forms"]`,
        'inputField':`//XCUIElementTypeTextField[@name="text-input"]`,
        'switch':`//XCUIElementTypeSwitch[@name="switch"]`,
        'clickDropDown':`//XCUIElementTypeTextField[@name="text_input"]`,
        'selectOption':`//android.widget.CheckedTextView[contains(@text,'Appium is awesome')]`,
        'clickDone':`~done_button`,
        'clickActive':`//XCUIElementTypeStaticText[@name="Active"]`,
        'confirmation':`~OK`
    }
}

ActionHelper.isPlatformAndroid() ? elements = locators.android : elements = locators.ios

class forms {

    static formBtn(){return $(elements.formBtn)}
    static inputField(){return $(elements.inputField)}
    static switch(){return $(elements.switch)}
    static clickDropDown(){return $(elements.clickDropDown)}
    static selectOption(){return $(elements.selectOption)}
    static clickDone(){return $(elements.clickDone)}
    static clickActive(){return $(elements.clickActive)}
    static confirmation(){return $(elements.confirmation)}

    static  async draganddrop(x1, y1, x2, y2){
    
        await driver.touchAction([
            {action: 'press', x:  x1, y: y1},
            {action: 'wait', ms: 1000},
            {action: 'moveTo', x: x2, y: y2},
            'release',
        ]);
    }

}

module.exports = forms;