$(document).ready(function(){
    $("#userName").focus();
    /* 点击登录按钮 */
    $('.wrap-login').on('click',function () {
        login();
    });
    $('input').on('keyup',function (event) {
       if(event.keyCode===13){
          login();
       }
    });
    function login() {
        var userName = $($('.wrap-main input').get(0)).val().trim();
        var passWord = $($('.wrap-main input').get(1)).val().trim();
        if(!userName){
            $('.error').html('用户名不能为空!');
            return;
        }else if(!passWord){
            $('.error').html('密码不能为空!');
            return;
        }
        $('.wrap-login').val('登录中...');
        window.location.href = '../publicService/publicService.html';
        // ajaxPost('user/login',{
        //     username:userName,
        //     password:passWord
        // },function (res) {
        //     res.result=1
        //     if(res.result==1){
        //         saveUserInfo({
        //             username:res.data.USER_NAME,
        //             department:res.data.GOV_ID
        //         });
        //         window.location.href = '../publicService/publicService.html';
        //     }else {
        //         $('.wrap-login').val('登录');
        //         $('.error').html('用户名或密码错误!');
        //     }
        // },function (error) {
        //     $('.wrap-login').val('登录');
        //     $('.error').html('登录失败!');
        // })
    }
});