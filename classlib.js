'use strict';


class Validator {

    constructor() {
        this.loginOk = false;
        this.pass1Ok = false;
        this.pass2Ok = false;
        this.emailOk = false;
    }

    checkLogin(login_val) {
        this.loginOk = true;
    }

    checkPass1(pass1_val) {
        this.pass1Ok = true;
    }

    checkPass2(pass2_val) {
        this.pass2Ok = true;
    }

    checkEmail(email_val) {
        this.emailOk = true;
    }

    validate() {
        return (this.loginOk == true && this.pass1Ok == true && this.pass2Ok == true && this.emailOk == true);
    }

}


class Controller {

    constructor(loginId, pass1Id, pass2Id, emailId, form1Id) {
        this.login = document.getElementById(loginId);
        this.pass1 = document.getElementById(pass1Id);
        this.pass2 = document.getElementById(pass2Id);
        this.email = document.getElementById(emailId);
        this.form1 = document.getElementById(form1Id);
        this.validator = new Validator();
    }

    activateListeners() {
        this.login.addEventListener('blur', () => { this.validator.checkLogin(this.login.value); });
        this.pass1.addEventListener('blur', () => { this.validator.checkPass1(this.pass1.value); });
        this.pass2.addEventListener('blur', () => { this.validator.checkPass2(this.pass2.value); });
        this.email.addEventListener('blur', () => { this.validator.checkEmail(this.email.value); });
        this.form1.addEventListener('submit', () => { 
            alert(this.validator.validate());
            if (this.validator.validate()) {
                this.form1.submit();
            } else {
                alert('Отправка данных заблокирована!');
            }
         });
    }

}