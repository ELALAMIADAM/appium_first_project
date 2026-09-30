const home_page = require("../pageobjects/HomePage")
const login_page = require("../pageobjects/loginPage")
const actions = require("../../common/Actions")
const assert = require("../../common/Assertions")
const allure = require('@wdio/allure-reporter').default
describe("login test",()=>{
    it("[smoke]should open and click on login",async()=> {
        await allure.step("Step 1 click on login", async()=>{
            await actions.Click(home_page.login)
            const username = "Hallaloja"+Math.floor(Math.random()*10000)
            const password = "bomboclat"
            await actions.SetValue(login_page.username,username)
            await actions.SetValue(login_page.password,password)
            await actions.Click(login_page.LoginSubmit)

            assert.assertElementTextEquals(login_page.ErrorMsg,"Invalid login credentials, please try again")
        })
    })
})