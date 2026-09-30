const homeElement = require("../../elements/Home")

class HomePage{
    get echoBox(){
        return $(homeElement.echoBox)
    }
    get login(){
        return $(homeElement.login)
    }

}
module.exports= new HomePage()