const ActionHelper = require('../helpers/actionHelpers')

let elements
const locators = {

    'android':{
        'clickDrop':`~Drag`,
        'drag_l2':`~drag-l2`,
        'drop_l2':`~drop-l2`,
        'drag_r3':`~drag-r3`,
        'drop_r3':`~drop-r3`,
        'drag_r1':`~drag-r1`,
        'drop_r1':`~drop-r1`,
        'drag_c1':`~drag-c1`,
        'drop_c1':`~drop-c1`,
        'drag_c3':`~drag-c3`,
        'drop_c3':`~drop-c3`,
        'drag_r2':`~drag-r2`,
        'drop_r2':`~drop-r2`,
        'drag_c2':`~drag-c2`,
        'drop_c2':`~drop-c2`,
        'drag_l1':`~drag-l1`,
        'drop_l1':`~drop-l1`,
        'drag_l3':`~drag-l3`,
        'drop_l3':`~drop-l3`,
        'assertion': `//android.widget.TextView[contains(@text,'Congratulations')]`
    },
    'ios':{
        'clickDrop':`~Drag`,
        'drag_l2':`//XCUIElementTypeOther[@name="drag-l2"]/XCUIElementTypeOther/XCUIElementTypeImage`,
        'drop_l2':`~drop-l2`,
        'drag_r3':`//XCUIElementTypeOther[@name="drag-r3"]/XCUIElementTypeOther/XCUIElementTypeImage`,
        'drop_r3':`~drop-r3`,
        'drag_r1':`//XCUIElementTypeOther[@name="drag-r1"]/XCUIElementTypeOther/XCUIElementTypeImage`,
        'drop_r1':`~drop-r1`,
        'drag_c1':`//XCUIElementTypeOther[@name="drag-c1"]/XCUIElementTypeOther/XCUIElementTypeImage`,
        'drop_c1':`~drop-c1`,
        'drag_c3':`//XCUIElementTypeOther[@name="drag-c3"]/XCUIElementTypeOther/XCUIElementTypeImage`,
        'drop_c3':`~drop-c3`,
        'drag_r2':`//XCUIElementTypeOther[@name="drag-r2"]/XCUIElementTypeOther/XCUIElementTypeImage`,
        'drop_r2':`~drop-r2`,
        'drag_c2':`//XCUIElementTypeOther[@name="drag-c2"]/XCUIElementTypeOther/XCUIElementTypeImage`,
        'drop_c2':`~drop-c2`,
        'drag_l1':`//XCUIElementTypeOther[@name="drag-l1"]/XCUIElementTypeOther/XCUIElementTypeImage`,
        'drop_l1':`~drop-l1`,
        'drag_l3':`//XCUIElementTypeOther[@name="drag-l3"]/XCUIElementTypeOther/XCUIElementTypeImage`,
        'drop_l3':`~drop-l3`,
        'assertion':`~Congratulations`
    }
}

ActionHelper.isPlatformAndroid() ? elements = locators.android : elements = locators.ios


class dragAnddrop{

    static clickDrop(){return $(elements.clickDrop)}
    static dragImg1(){return $(elements.drag_l2)}
    static dragImg1Target(){return $(elements.drop_l2)}
    static dragImg2(){return $(elements.drag_r3)}
    static dragImg2Target(){return $(elements.drop_r3)}
    static dragImg3(){return $(elements.drag_r1)}
    static dragImg3Target(){return $(elements.drop_r1)}
    static dragImg4(){return $(elements.drag_c1)}
    static dragImg4Target(){return $(elements.drop_c1)}
    static dragImg5(){return $(elements.drag_c3)}
    static dragImg5Target(){return $(elements.drop_c3)}
    static dragImg6(){return $(elements.drag_r2)}
    static dragImg6Target(){return $(elements.drop_r2)}
    static dragImg7(){return $(elements.drag_c2)}
    static dragImg7Target(){return $(elements.drop_c2)}
    static dragImg8(){return $(elements.drag_l1)}
    static dragImg8Target(){return $(elements.drop_l1)}
    static dragImg9(){return $(elements.drag_l3)}
    static dragImg9Target(){return $(elements.drop_l3)}
    static assertion(){return $(elements.assertion)}


    static  async draganddrop(x1, y1, x2, y2){
    
        await driver.touchAction([
            {action: 'press', x:  x1, y: y1},
            {action: 'wait', ms: 1000},
            {action: 'moveTo', x: x2, y: y2},
            'release',
        ]);
    }



}
module.exports = dragAnddrop; 