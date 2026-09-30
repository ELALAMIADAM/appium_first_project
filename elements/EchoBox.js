class EchoBox{
    saySmth = `~messageInput`
    button_save= `-android uiautomator:new UiSelector().text("Save")`
    msg_text= `-android uiautomator:new UiSelector().text("Here's what you said before:")`
    Input_text=`id:savedMessage`
}
module.exports=new EchoBox()