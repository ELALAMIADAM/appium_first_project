
class Actions {
    async Click(element){
        await element.waitForDisplayed({timeout:120000})
        await element.click()
    }
    async SetValue(element,value){
        await element.waitForDisplayed({timeout:120000})
        await element.clearValue(value)
        await element.setValue(value)
    }
}
module.exports = new Actions()