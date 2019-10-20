export default class Register {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor(){
        this.user = {};
        this.isLoggedIn = false;
        this.bindEvents();
        this.api_url = "https://realmemobile.vn/flash-sale/rm_brandgame/api/"
    }


    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents(){
        this.AutoLoggin();
        this.RegisterSetup();
    }



    /* ===================================
     *  METHODS
     * =================================== */
    RegisterSetup(){
        this.$loginBtn = $('#login-btn');
        this.$loginInput = $('#log_user_id');
        this.$loginBtn.on('click', () => {
            let submitData = this.$loginInput.val();
            console.log(submitData);
            this.Login(submitData);
        });

        this.$loginInput.on('keyup', (e) => {
            if(e.keyCode === 13){
                let submitData = this.$loginInput.val();
                this.Login(submitData);
            }
        })

        this.$registerBtn = $('#register-btn');
        this.$regName = $('#reg_user_id');
        this.$regPhone = $('#reg_user_phone');
        this.$regEmail = $('#reg_user_email');

        this.$registerBtn.on('click', () => {
            let name = this.$regName.val();
            let phone = this.$regPhone.val();
            let email = this.$regEmail.val();

            this.Register({
                name: name,
                phone: phone,
                email: email
            });
        });

        this.$logoutBtn = $('#logout-btn');
        this.$logoutBtn.on('click', () => {
            this.Logout();
        });
    }

    Login(submitData){
        let demo = JSON.stringify({
            "email_or_phone": String(submitData)
        });

        var myHeaders = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        });

        // Login Function
        fetch('https://realmemobile.vn/flash-sale/rm_brandgame/api/login.php',{
            method: 'POST',
            headers: myHeaders,
            body: demo
        }).then(res => {
            if(res.status == 200){
                res.json().then(data => {
                    this.isLoggedIn = true;
                    this.LoginSuccess(data);
                });
            } else {
                throw Error;
            }
        }).catch( err => {
            console.log('Sai rui');
        });
    }

    Register({name, phone, email}){
        console.log(name, phone, email)
        let demo = JSON.stringify({
            "name": String(name),
            "email": String(email),
            "phone":  String(phone)
        });

        let myHeaders = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        });

        // Login Function
        fetch('https://realmemobile.vn/flash-sale/rm_brandgame/api/register.php',{
            method: 'POST',
            headers: myHeaders,
            body: demo
        }).then(res => {
            if(res.status == 200){
                res.json().then(data => {
                    let { user } = data;

                    this.LoginSuccess(data);
                });
            } else {
                throw Error;
            }
        }).catch( err => {
            console.log('Register ko thanh cong');
        });
    }

    LoginSuccess(data){
        let hideElements = $('.hide-on-logged-in');
        let showElements = $('.show-on-logged-in');
        let showInlineBlock = $('a.show-on-logged-in');
        let displayName = $('#username-display');

        this.HideLoginModal();

        let { user } = data;
        let token = 'Bearer ' + data.jwt;

        localStorage.setItem('realme-phone', user.phone);
        console.log(localStorage.getItem('realme-phone'));
        localStorage.setItem('realme-token', token);
        console.log(localStorage.getItem('realme-token'));

        // Show & Hide Element When Logged In
        hideElements.hide();
        showElements.show();
        showInlineBlock.css('display', 'inline-block')

        // Display User Name
        displayName.html(user.email);

        console.log(user)
    }

    HideLoginModal(){
        this.$ModalElement = $('#modal-signup');
        this.$body = $('body');

        this.$ModalElement.removeClass('show-modal');
        this.$body.removeClass('show-modal');
    }

    AutoLoggin(){
        let phoneNumber = localStorage.getItem('realme-phone');
        let tokenString = localStorage.getItem('realme-token');
        if(phoneNumber){
            this.Login(phoneNumber);
        }
    }

    AutoLoggin_OLD(){
        let header = new Headers({
            'Access-Control-Allow-Origin':'*',
            'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsby5ybV9icmFuZGdhbWVcLyIsImF1ZCI6ImxvLnJtX2JyYW5kZ2FtZVwvIiwiaWF0IjoxMCwibmJmIjoxNTU5MjgyMzI0LCJleHAiOjE1NTkyODMzMjQsImRhdGEiOnsiaWQiOiI0IiwibmFtZSI6InRyXHUxZWE3biBtaW5oIG5oXHUxZWFkdCIsInBob25lIjoiMDkyODI4NzYxMiIsImVtYWlsIjoidG1uaGF0MTk5M0BnbWFpbC5jb20ifX0.swmehuQ6dhyVd8y3mnSTWB7YQ-oVv9KIAJ_4nnOqSzk',
        });

        fetch('http://private-anon-54cb6f0187-rmbrandgame.apiary-proxy.com/users/4', {
            method: 'GET',
            headers: header
        }).then(
            res => {
                res.json().then(data => {
                    console.log(data);
                })
            }
        ).catch(err => {
            console.log(err);
        });
    }

    Logout(){
        let showElements = $('.hide-on-logged-in');
        let hideElements = $('.show-on-logged-in');
        let displayName = $('#username-display');

        localStorage.removeItem('realme-phone');
        localStorage.removeItem('realme-token');

        hideElements.hide();
        showElements.show();
    }

    get IsLoggedIn(){
        return this.isLoggedIn;
    }
}