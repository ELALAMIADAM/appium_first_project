const loginelement = require("../../elements/Login")


class loginPage{
    get username(){
        return $(loginelement.username)
    }

    get password(){
        return $(loginelement.password)
    }

    get LoginSubmit(){
        return $(loginelement.login_submit)
    }
    get ErrorMsg(){
        return $(loginelement.err_msg)
    }
}

module.exports = new loginPage