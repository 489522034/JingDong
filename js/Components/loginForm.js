//模拟后台
Mock.mock('http://api.com', {
    "info|0-1":10
});
//登陆表单
class loginForm{
    constructor(account,password,submit,message){
        this.account=account;
        this.password=password;
        this.submit=submit;
        this.message=message;
        this.init();
    }
    init(){
        // 绑定点击事件
        this.submit.onclick=this.check.bind(this);
    }
    check(){
        let accountCheck=/^[a-zA-Z0-9]{6,16}$/;
        let accountResult=accountCheck.test(this.account.value);
        let passwordCheck=/^[a-zA-Z0-9]{6,16}$/;
        let passwordResult=passwordCheck.test(this.password.value);
        if(accountResult&&passwordResult){
            this.match();
        }else{
            this.message.innerHTML="请输入正确的用户名或密码格式";
            this.message.style.display="block";
        }
    }
    match(){
        let that=this;
        $.ajax({
            url: 'http://api.com',
            dataType: 'json'
        }).done(function(data){
            if(data.info==0){
                that.message.innerHTML="账户密或密码错误";
                that.message.style.display="block";
            }else{
                $.cookie("login","1",{path:'/'});
                window.location.href="../../html/index.html";
            }   
        })
    }
}
export {loginForm};