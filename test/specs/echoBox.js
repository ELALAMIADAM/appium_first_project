const home_page = require("../pageobjects/HomePage")
const echobox_page = require("../pageobjects/EchoBoxPage")
const actions = require("../../common/Actions")
const assert = require("../../common/Assertions")
const allure = require('@wdio/allure-reporter').default
describe("echoBox test",()=>{
    it("should open and click on echoBox",async()=> {
        await allure.step("Step 1 click on echoBox", async()=>{
            await actions.Click(home_page.echoBox)
            const saysmth = "Hallaloja"
            await actions.SetValue(echobox_page.sayS,saysmth)
            await actions.Click(echobox_page.buttonSave)

            assert.assertElementTextEquals(echobox_page.ConfigMsg,"Here's what you said before:")
            assert.assertElementIsDisplayed(echobox_page.MsgInput,saysmth)
        })
    })
})