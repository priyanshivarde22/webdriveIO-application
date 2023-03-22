
const ActionHelper = require('../helpers/actionHelpers')

let elements
const locators = {

    'android':{
        'clickSwipe':'~Swipe',
        'assetSwipe':`//android.widget.TextView[contains(@text,'COMPATIBLE')]`
    },
    'ios':{
        'clickSwipe':'//XCUIElementTypeButton[@name="Swipe"]',
        'assetSwipe':`//XCUIElementTypeStaticText[@name="COMPATIBLE"]`
    }
}

ActionHelper.isPlatformAndroid() ? elements = locators.android : elements = locators.ios


class swipe{
    static clickSwipe(){
        return $(elements.clickSwipe)
    }
    

    static  assetSwipe() { 
        return $(elements.assetSwipe); 
    }

}

module.exports = swipe; 










