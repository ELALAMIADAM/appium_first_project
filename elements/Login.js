class Login{
    username='~username'
    password=`~password`
    login_submit=`-android uiautomator:new UiSelector().text("Login").instance(1)`
    err_msg=`class name:android.widget.TextView`
}
module.exports = new Login() 