const echoBoxelement = require("../../elements/EchoBox")


class EchoBoxPage{
    get sayS(){
        return $(echoBoxelement.saySmth)
    }
    get buttonSave(){
        return $(echoBoxelement.button_save)
    }
    get ConfigMsg(){
        return $(echoBoxelement.msg_text)
    }
    get MsgInput(){
        return $(echoBoxelement.Input_text)
    }

}
module.exports= new EchoBoxPage()