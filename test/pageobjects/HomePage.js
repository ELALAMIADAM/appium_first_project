const homeElement = require("../../elements/Home")


class HomePage{
    get echoBox(){
        return $(homeElement.echoBox)
    }

}
module.exports= new HomePage()