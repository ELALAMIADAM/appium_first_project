const home_page = require("../pageobjects/HomePage")
const actions = require("../../common/Actions")
const assert = require("../../common/Assertions")
const allure = require('@wdio/allure-reporter').default
describe("echoBox test",()=>{
    it("should open and click on echoBox",async()=> {
        await allure.step("Step 1 click on echoBox", async()=>{
            await actions.Click(home_page.echoBox)
        })
    })
})