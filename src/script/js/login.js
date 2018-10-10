!function($){
    function addCookie(key,value,day){
        var date=new Date();
        date.setDate(date.getDate()+day);
        document.cookie=key+'='+encodeURI(value)+';expires='+date;
    }
    
    
    $('#btn').on('click',function(){
        var $phonenumber=$('#phonenumber').val();
        var $password=$('#password').val();
        $.ajax({
            type:'post',
            url:'http://10.31.162.72/qd2/zol/php/login.php',
            data:{
                number:$phonenumber,
                pass:$password
            },
            success:function(data){
                if(!data){
                    $('#error').html('用户名或者密码错误');
                    $('#password').val('');
                }else{
                    addCookie('phonenumber',$phonenumber,7);
                    location.href='index.html';
                }
            }
        })
    });

    $register=$('.have a');
    $register.on('click',function(){
        location.href='register.html';
    });
}(jQuery);