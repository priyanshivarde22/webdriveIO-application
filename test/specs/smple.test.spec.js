const login = require("../pageobjects/login");
const signup = require("../pageobjects/signup");
const forms = require("../pageobjects/forms");
const swipe = require("../pageobjects/swipe");
const dradAnddrop = require("../pageobjects/drag&drop");
const webbrowser = require("../pageobjects/webbrowser");
const genEmail = require("../helpers/generateEmail");
const ActionHelper = require("../helpers/actionHelpers");
const assert = require("assert");
const should = require("chai").should();
const { expect } = require("chai");
const CONTEXT_REF = {
  NATIVE: 'native',
  WEBVIEW: 'webview'
};

describe("webdriverio application testing", async function () {
  var email = await genEmail;
  it("execute signup...", async function () {
    await signup.loginBtn().click();
    await signup.signupbtn().click();
    await console.log("email: ", email);
    await signup.email().setValue(email);
    await signup.password().setValue("test4321");
    await signup.repeatPassword().setValue("test4321");
    await signup.clickSignup().click();
    await signup.clickPopup().click();
  });

  it("execute login...", async function () {
    await login.loginBtn().click();
    await login.email().setValue(email);
    //await driver.pause(10000);
    await login.password().setValue("test4321");
     if(await ActionHelper.isPlatformAndroid()){
    
    }
    else{
      await login.x().click();
    }
    await login.clickLogin().click();
    await login.loginPopup().click();
  });

  it("execute forms...", async function () {
    if (ActionHelper.isPlatformAndroid()) {
      await forms.formBtn().click();
      await forms.inputField().setValue("hello...");
      await forms.switch().click();
      await forms.clickDropDown().click();
      await forms.selectOption().click();
      await forms.clickActive().click();
      await forms.confirmation().click();
    } else {
      await forms.formBtn().click();
      await forms.inputField().setValue("hello...");
      await forms.switch().click();
      await forms.clickDropDown().click();
      await driver.touchPerform([
        { action: "press", options: { x: 170, y: 805 } },
        { action: "wait", options: { ms: 1000 } },
        { action: "moveTo", options: { x: 170, y: 650 } },
        { action: "release" },
      ]);
      await forms.clickDone().click();
      await forms.clickActive().click();
      await forms.confirmation().click();
    }
  });

  it("execute swipe...", async function () {
    if(ActionHelper.isPlatformAndroid()){
      await swipe.clickSwipe().click();
    await driver.touchPerform([
      { action: "press", options: { x: 900, y: 1400 } },
      { action: "wait", options: { ms: 1000 } },
      { action: "moveTo", options: { x: 300, y: 1400 } },
      { action: "release" },
    ]);
    await driver.touchPerform([
      { action: "press", options: { x: 900, y: 1400 } },
      { action: "wait", options: { ms: 1000 } },
      { action: "moveTo", options: { x: 300, y: 1400 } },
      { action: "release" },
    ]);
    await driver.touchPerform([
      { action: "press", options: { x: 900, y: 1400 } },
      { action: "wait", options: { ms: 1000 } },
      { action: "moveTo", options: { x: 300, y: 1400 } },
      { action: "release" },
    ]);
    await driver.touchPerform([
      { action: "press", options: { x: 900, y: 1400 } },
      { action: "wait", options: { ms: 1000 } },
      { action: "moveTo", options: { x: 300, y: 1400 } },
      { action: "release" },
    ]);
    await driver.touchPerform([
      { action: "press", options: { x: 900, y: 1400 } },
      { action: "wait", options: { ms: 1000 } },
      { action: "moveTo", options: { x: 300, y: 1400 } },
      { action: "release" },
    ]);
    await driver.touchPerform([
      { action: "press", options: { x: 900, y: 1400 } },
      { action: "wait", options: { ms: 1000 } },
      { action: "moveTo", options: { x: 300, y: 1400 } },
      { action: "release" },
    ]);
    await driver.pause(5000)
    let assetSwipe = await swipe.assetSwipe().getText();
    await assert.strictEqual(assetSwipe, "COMPATIBLE");
    }
    else{
    await swipe.clickSwipe().click();
    await driver.touchPerform([
      { action: "press", options: { x: 321, y: 550 } },
      { action: "wait", options: { ms: 1000 } },
      { action: "moveTo", options: { x: 50, y: 550 } },
      { action: "release" },
    ]);
    await driver.touchPerform([
      { action: "press", options: { x: 321, y: 550 } },
      { action: "wait", options: { ms: 1000 } },
      { action: "moveTo", options: { x: 50, y: 550 } },
      { action: "release" },
    ]);
    await driver.touchPerform([
      { action: "press", options: { x: 321, y: 550 } },
      { action: "wait", options: { ms: 1000 } },
      { action: "moveTo", options: { x: 50, y: 550 } },
      { action: "release" },
    ]);
    await driver.touchPerform([
      { action: "press", options: { x: 321, y: 550 } },
      { action: "wait", options: { ms: 1000 } },
      { action: "moveTo", options: { x: 50, y: 550 } },
      { action: "release" },
    ]);
    await driver.touchPerform([
      { action: "press", options: { x: 321, y: 550 } },
      { action: "wait", options: { ms: 1000 } },
      { action: "moveTo", options: { x: 50, y: 550 } },
      { action: "release" },
    ]);
    await driver.touchPerform([
      { action: "press", options: { x: 321, y: 550 } },
      { action: "wait", options: { ms: 1000 } },
      { action: "moveTo", options: { x: 50, y: 550 } },
      { action: "release" },
    ]);
    await driver.pause(5000)
    let assetSwipe = await swipe.assetSwipe().getText();
    await assert.strictEqual(assetSwipe, "COMPATIBLE");
  }
  });

  it("execute drag and drop...", async function () {
    let pixel;
    ActionHelper.isPlatformAndroid() ? (pixel = 100) : (pixel = 10);
    await dradAnddrop.clickDrop().click();
    const drag_img1_x = (await dradAnddrop.dragImg1().getLocation()).x;
    console.log("XXX: ", drag_img1_x);
    const drag_img1_y = (await dradAnddrop.dragImg1().getLocation()).y;
    console.log("yyyX: ", drag_img1_y);
    const drag_img1_target_x = (
      await dradAnddrop.dragImg1Target().getLocation()
    ).x;
    console.log("xxxX: ", drag_img1_target_x);
    const drag_img1_target_y = (
      await dradAnddrop.dragImg1Target().getLocation()
    ).y;
    console.log("yyyy: ", drag_img1_target_y);
    const drag_img2_x = (await dradAnddrop.dragImg2().getLocation()).x;
    const drag_img2_y = (await dradAnddrop.dragImg2().getLocation()).y;
    const drag_img2_target_x = (
      await dradAnddrop.dragImg2Target().getLocation()
    ).x;
    const drag_img2_target_y = (
      await dradAnddrop.dragImg2Target().getLocation()
    ).y;
    const drag_img3_x = (await dradAnddrop.dragImg3().getLocation()).x;
    const drag_img3_y = (await dradAnddrop.dragImg3().getLocation()).y;
    const drag_img3_target_x = (
      await dradAnddrop.dragImg3Target().getLocation()
    ).x;
    const drag_img3_target_y = (
      await dradAnddrop.dragImg3Target().getLocation()
    ).y;
    const drag_img4_x = (await dradAnddrop.dragImg4().getLocation()).x;
    const drag_img4_y = (await dradAnddrop.dragImg4().getLocation()).y;
    const drag_img4_target_x = (
      await dradAnddrop.dragImg4Target().getLocation()
    ).x;
    const drag_img4_target_y = (
      await dradAnddrop.dragImg4Target().getLocation()
    ).y;
    const drag_img5_x = (await dradAnddrop.dragImg5().getLocation()).x;
    const drag_img5_y = (await dradAnddrop.dragImg5().getLocation()).y;
    const drag_img5_target_x = (
      await dradAnddrop.dragImg5Target().getLocation()
    ).x;
    const drag_img5_target_y = (
      await dradAnddrop.dragImg5Target().getLocation()
    ).y;
    const drag_img6_x = (await dradAnddrop.dragImg6().getLocation()).x;
    const drag_img6_y = (await dradAnddrop.dragImg6().getLocation()).y;
    const drag_img6_target_x = (
      await dradAnddrop.dragImg6Target().getLocation()
    ).x;
    const drag_img6_target_y = (
      await dradAnddrop.dragImg6Target().getLocation()
    ).y;
    const drag_img7_x = (await dradAnddrop.dragImg7().getLocation()).x;
    const drag_img7_y = (await dradAnddrop.dragImg7().getLocation()).y;
    const drag_img7_target_x = (
      await dradAnddrop.dragImg7Target().getLocation()
    ).x;
    const drag_img7_target_y = (
      await dradAnddrop.dragImg7Target().getLocation()
    ).y;
    const drag_img8_x = (await dradAnddrop.dragImg8().getLocation()).x;
    const drag_img8_y = (await dradAnddrop.dragImg8().getLocation()).y;
    const drag_img8_target_x = (
      await dradAnddrop.dragImg8Target().getLocation()
    ).x;
    const drag_img8_target_y = (
      await dradAnddrop.dragImg8Target().getLocation()
    ).y;
    const drag_img9_x = (await dradAnddrop.dragImg9().getLocation()).x;
    const drag_img9_y = (await dradAnddrop.dragImg9().getLocation()).y;
    const drag_img9_target_x = (
      await dradAnddrop.dragImg9Target().getLocation()
    ).x;
    const drag_img9_target_y = (
      await dradAnddrop.dragImg9Target().getLocation()
    ).y;
    await dradAnddrop.draganddrop(
      drag_img1_x,
      drag_img1_y,
      drag_img1_target_x + pixel,
      drag_img1_target_y + pixel
    );
    //await driver.pause(5000);
    await dradAnddrop.draganddrop(
      drag_img2_x,
      drag_img2_y,
      drag_img2_target_x + pixel,
      drag_img2_target_y + pixel
    );
    await dradAnddrop.draganddrop(
      drag_img3_x,
      drag_img3_y,
      drag_img3_target_x + pixel,
      drag_img3_target_y + pixel
    );
    await dradAnddrop.draganddrop(
      drag_img4_x,
      drag_img4_y,
      drag_img4_target_x + pixel,
      drag_img4_target_y + pixel
    );
    await dradAnddrop.draganddrop(
      drag_img5_x,
      drag_img5_y,
      drag_img5_target_x + pixel,
      drag_img5_target_y + pixel
    );
    await dradAnddrop.draganddrop(
      drag_img6_x,
      drag_img6_y,
      drag_img6_target_x + pixel,
      drag_img6_target_y + pixel
    );
    await dradAnddrop.draganddrop(
      drag_img7_x,
      drag_img7_y,
      drag_img7_target_x + pixel,
      drag_img7_target_y + pixel
    );
    await dradAnddrop.draganddrop(
      drag_img8_x,
      drag_img8_y,
      drag_img8_target_x + pixel,
      drag_img8_target_y + pixel
    );
    await dradAnddrop.draganddrop(
      drag_img9_x,
      drag_img9_y,
      drag_img9_target_x + pixel,
      drag_img9_target_y + pixel
    );
    let dropAssertion = await dradAnddrop.assertion().getText();
    await assert.strictEqual(dropAssertion, "Congratulations");
  });

  it("execute webview...", async function () {
    if(ActionHelper.isPlatformAndroid()){
    await webbrowser.webBtn().click();
    const x = await driver.getContexts();
    console.log("context: ", x);
    await driver.switchContext(x[1]);
    await driver.pause(5000);
    await driver.touchPerform([
      { action: "press", options: { x: 190, y: 702 } },
      { action: "wait", options: { ms: 1000 } },
      { action: "moveTo", options: { x: 190, y: 500 } },
      { action: "release" },
    ]);
    await webbrowser.getStartedBtn().click();
    let assertGetStarted = await webbrowser.assertGetStarted().getText();
    await assert.strictEqual(assertGetStarted, "Getting Started");
    await driver.pause(1000);
    await webbrowser.homeBtn().click();
    await driver.pause(1000);
    await webbrowser.webdriverioBtn().click();
    let assertWebdriverio = await webbrowser.assertWebdriverio().getText();
    await driver.pause(1000);
    await assert.strictEqual(assertWebdriverio, "Why Webdriver.IO?");
    await driver.pause(1000);
    await webbrowser.homeBtn().click();
    await driver.pause(1000);
    await webbrowser.githubBtn().click();
    await driver.pause(1000);
  }
  else{
    await webbrowser.webBtn().click();
    // await driver.pause(5000);
    // const x = await driver.getContexts();
    // console.log("context: ", x);
    // await driver.pause(10000)
    // await driver.switchContext('WEBVIEW_1');
    // await driver.pause(5000);
    await driver.touchPerform([
      { action: "press", options: { x: 190, y: 702 } },
      { action: "wait", options: { ms: 1000 } },
      { action: "moveTo", options: { x: 190, y: 500 } },
      { action: "release" },
    ]);
    await webbrowser.getStartedBtn().click();
    let assertGetStarted = await webbrowser.assertGetStarted().getText();
    await assert.strictEqual(assertGetStarted, "Getting Started");
    await driver.pause(1000);
    await webbrowser.homeBtn().click();
    await driver.pause(1000);
    await webbrowser.webdriverioBtn().click();
    let assertWebdriverio = await webbrowser.assertWebdriverio().getText();
    await assert.strictEqual(assertWebdriverio, "Why Webdriver.IO?");
    await driver.pause(1000);
    await webbrowser.homeBtn().click();
    await driver.pause(1000);
    await webbrowser.githubBtn().click();
    await driver.pause(1000);  
    let assertGitHub = await webbrowser.githubAssertion().getText();
    await assert.strictEqual(assertGitHub, "WebdriverIO");
    await driver.pause(1000);
    await webbrowser.clickHomeBTN().click();
  }
  });
});
