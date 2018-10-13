!function($){
    //添加cookie的函数
    function addCookie(key,value,day){
        var date=new Date();//创建日期对象
        date.setDate(date.getDate()+day);//过期时间：获取当前的日期+天数，设置给date
        document.cookie=key+'='+encodeURI(value)+';expires='+date;//添加cookie，设置过期时间
    }
    //得到cookie
    function getCookie(key){
        var str=decodeURI(document.cookie);
        var arr=str.split('; ');
        for(var i=0;i<arr.length;i++){
            var arr1=arr[i].split('=');
            if(arr1[0]==key){
                return arr1[1];
            }
        }
    }
    //删除cookie

    function delCookie(key){
        addCookie(key,'',-1);//添加的函数,将时间设置为过去时间
    }

    var number=0;
    function createcart(sid,num){
        $.ajax({
            url:'http://10.31.162.72/qd2/zol/php/connhotsell.php',
            dataType:'json'
        }).done(function(data){
            for (var i = 0; i < data.length; i++) {
                $address=data[i].url.split(',');
                if (sid == data[i].sid) {
                    var $clone = $('.goods-items:hidden').clone(true);//对隐藏的模块进行克隆
                    //都是赋值
                    $clone.find('.pic').find('img').attr('src', $address[0]);
                    $clone.find('.pic').find('img').attr('sid', data[i].sid);
                    $clone.find('.tit').find('a').html(data[i].title);
                    $clone.find('.s-price').find('em').html(data[i].price);
                    $clone.find('.buy-num').find('input').val(num);
                    //计算价格,每个商品的价格
                    var $dj1 = parseFloat($clone.find('.s-price em').html());//获取单价
                    $clone.find('.s-total  em').html(($dj1 * num).toFixed(2));//num：数量
                    $clone.css('display', 'block');//克隆的模块是隐藏，显示出来。
                    $('.goods-list').append($clone);//追加
                    kong();
                    totalprice();
                    $('.cart-state p em').html('('+$('.goods-items:visible').length+'/30)');
                }
            }
        });
    };

    var sidarr = [];
    var numarr = [];
    function cookieToArray(){
        if(getCookie('cartsid')){
            sidarr=getCookie('cartsid').split(',');
        }
        
        if(getCookie('cartnum')){
            numarr=getCookie('cartnum').split(',');
        }
    };

    if (getCookie('cartsid') && getCookie('cartnum')) {
        var s = getCookie('cartsid').split(',');//存放sid数组
        var n = getCookie('cartnum').split(',');//存放数量数组
        for (var i = 0; i < s.length; i++) {
            createcart(s[i], n[i]);//遍历创建商品列表
        }
    };


    kong();
    function kong() {
        if (getCookie('cartsid')) {//cookie存在，有商品，购物车不再为空
            $('.empty-cart').hide();
        } else {
            $('.empty-cart').show();
        }
    };


    function totalprice() {
        var total = 0;
        var countnum = 0;
        $('.goods-items:visible').each(function() {//可视的商品列表进行遍历，循环叠加
            if ($(this).find('input:checkbox').is(':checked')) {//商品的复选框是选中的
                total += parseFloat($(this).find('.s-total  em').html());
            }
        });
        $('.total-cart-price').html(total.toFixed(2));
    };


    //改变商品数量++
    $('.plus').on('click', function() {
        var $count = $(this).parents('.goods-items').find('.buy-num input').val();
        $count++;
        if ($count >= 99) {
            $count = 99;
        }
        $(this).parents('.goods-items').find('.buy-num input').val($count);
        $(this).parents('.goods-items').find('.s-total').find('em').html(singlegoodsprice($(this)));//改变后的价格
        totalprice();
        setcookie($(this));
    
    });
    //改变商品数量--
    $('.minus').on('click', function() {
        var $count = $(this).parents('.goods-items').find('.buy-num input').val();
        $count--;
        if ($count <= 1) {
            $count = 1;
        }
        $(this).parents('.goods-items').find('.buy-num input').val($count);
        $(this).parents('.goods-items').find('.s-total').find('em').html(singlegoodsprice($(this)));//改变后的价格
        totalprice();
        setcookie($(this));
    
    });

    //直接输入改变数量
    $('.buy-num input').on('input', function() {
        var $reg = /^\d+$/g; //只能输入数字
        var $value = parseInt($(this).val());
        if ($reg.test($value)) {
            if ($value >= 99) {//限定范围
                $(this).val(99);
            } else if ($value <= 0) {
                $(this).val(1);
            } else {
                $(this).val($value);
            }
        } else {
            $(this).val(1);
        }
        $(this).parents('.goods-items').find('.s-total').find('em').html(singlegoodsprice($(this)));//改变后的价格
        totalprice();
        setcookie($(this));
    });

    //计算数量改变后单个商品的价格
    function singlegoodsprice(row) { //row:当前元素
        var $dj = parseFloat(row.parents('.goods-items').find('.s-price ').find('em').html());
        var $cnum = parseInt(row.parents('.goods-items').find('.buy-num input').val());
        return ($dj * $cnum).toFixed(2);
    }

    //将改变后的数量的值存放到cookie
    function setcookie(obj) { //obj:当前操作的对象
        cookieToArray();
        var $index = obj.parents('.goods-items').find('img').attr('sid');
        numarr[sidarr.indexOf($index)] = obj.parents('.goods-items').find('.buy-num input').val();
        addCookie('cartnum', numarr.toString(), 7);
    }



    //删除cookie的函数
    function delgoodslist(sid, sidarr) {//sid：当前的sid，sidarr:cookie的sid的值
        var index = -1;
        for (var i = 0; i < sidarr.length; i++) {
            if (sid == sidarr[i]) {
                index = i;
            }
        }
        sidarr.splice(index, 1);//删除数组对应的值
        numarr.splice(index, 1);//删除数组对应的值
        addCookie('cartsid', sidarr.toString(), 7);//添加cookie
        addCookie('cartnum', numarr.toString(), 7);
    }

    //删除单个商品的函数(委托)
    $('.goods-list').on('click', '.s-delbox .del', function(ev) {
        cookieToArray(); //转数组
    if(confirm('你确定要删除吗？')){
        $(this).first().parents('.goods-items').remove();
    }
        delgoodslist($(this).first().parents('.goods-items').find('img').attr('sid'), sidarr);
        totalprice();
        $('.cart-state p em').html('('+$('.goods-items:visible').length+'/30)');
    });

    //批量删除
    $('.order-foot a:first').on('click', function() {
        $('.goods-items:visible').each(function() {
            if ($(this).find('input:checkbox').is(':checked')) {
                $(this).remove();
                delgoodslist($(this).find('img').attr('sid'), sidarr);
            }
        });
        totalprice();
        $('.cart-state p em').html('('+$('.goods-items:visible').length+'/30)');
    });
}(jQuery);