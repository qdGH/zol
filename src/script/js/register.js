!function($){
    $(function(){
        $('#registerform').validate({
            rules:{
                phonenumber:{
                    required:true,
                    digits:true,
                    rangelength:[11,11],  
                    remote: {
                        url: "http://10.31.162.72/qd2/zol/php/register.php", 
                        type: "post"           
                    }
                },
                password:{
                    required:true,
                    rangelength:[6,16]
                },
                confirmpass:{
                    required: true,
                    equalTo: "#password"
                },
            },
            messages:{
                phonenumber:{
                    required:"请输入手机号码",
                    digits:"必须是整数",
                    rangelength:"号码有误" ,
                    remote:'手机号码已存在'
                },
                password:{
                    required:"请输入密码",
                    rangelength:"密码长度必须介于6 到 16位之间"
                },
                repass:{
                    required: "请输入确认密码",
                    equalTo: "两次密码输入不一致"
                },
            }
            
        });
    });
    
    $.validator.setDefaults({
        success: function(label){
            label.text('√').css('color','green').addClass('valid');
        }
    });

    $login=$('.have a');
    $login.on('click',function(){
        location.href='login.html';
    });

    $gologin=$('.fast-login a');
    $gologin.on('click',function(){
        location.href='login.html';
    });
}(jQuery);