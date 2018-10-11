!function($){
	$('.topcontent').load('header.html',function(){
		!function(){
			$citylocation=$('.city-location');
			$citylist=$('.city-location .city-list');
			$citylocation.hover(function(){
				$citylist.show();
			},function(){
				$citylist.hide();
			});

			$mycenter=$('.my-center');
			$focuson=$('.my-center .focus-on');
			$mycenter.hover(function(){
				$focuson.show();
			},function(){
				$focuson.hide();
			});

			$mobile=$('.mobile');
			$ewm=$('.mobile .ewm');
			$mobile.hover(function(){
				$ewm.show();
			},function(){
				$ewm.hide();
			});

			$contactcustomer=$('.contact-customer');
			$phonenum=$('.contact-customer .phonenum');
			$contactcustomer.hover(function(){
				$phonenum.show();
			},function(){
				$phonenum.hide();
			});

			$categoryitem=$('.category-nav-body .item');
			$categorysubnav=$('.category-sub-nav');
			$categoryitem.hover(function(){
				$(this).addClass('hover').siblings('div').removeClass('hover');
				$categorysubnav.show();
			},function(){
				$(this).removeClass('hover');
				$categorysubnav.hide();
			});

			$register=$('.t-register a');
			$register.on('click',function(){
				location.href='register.html';
			});

			$login=$('.login .g-login');
			$login.on('click',function(){
				location.href='login.html';
			});
							

		}();

		function addCookie(key,value,day){
			var date=new Date();
			date.setDate(date.getDate()+day);
			document.cookie=key+'='+encodeURI(value)+';expires='+date;
		}
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
		function delCookie(key,value){
			addCookie(key,value,-1);
		}

		$(function(){
			if(getCookie('phonenumber')){
				$('.login').hide();
				$('.admin').show().find('.user').html(getCookie('phonenumber'));
			}
			$('.admin .back').on('click',function(){
				delCookie('phonenumber','',-1);
				$('.admin').hide();
				$('.login').show();
			});
		});
	});
	$('.footercontent').load('footer.html');


	
	$sid=location.search;
	$.ajax({
		url:'http://10.31.162.72/qd2/zol/php/conndetails.php'+$sid,
		dataType:'json'
	}).done(function(data){
		$address=data[0].url.split(',');
		$spic=$('.spic');
		var $htmlstr=`<img src="${$address[0]}">
					<div class="sf"></div>`;
		$spic.html($htmlstr);

		

		$imglist=$('.imglist');
		var $imgstr=`<li class="border">
						<a href="javascript:;">
							<img src="${$address[0]}" alt="">
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<img src="${$address[1]}" alt="">
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<img src="${$address[2]}" alt="">
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<img src="${$address[3]}" alt="">
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<img src="${$address[4]}" alt="">
						</a>
					</li>`;
		$imglist.html($imgstr);

		$h3=$('.zs-commodity-title');
		var $hstr=`${data[0].title}
					<span class="subheading">${data[0].stitle}</span>`;	
		$h3.html($hstr);

		$price=$('.zs-price');
		var $pstr=`¥<em id="zp-goods-price">${data[0].price}</em>`;
		$price.html($pstr);





		$imlist=$('.imglist');
		$spic=$('.spic');

		$('.bf').find('img').attr('src',$spic.find('img').attr('src'))

		$imlistli=$('.imglist li');
		$imlistli.on('click',function(ev){
			$(this).addClass('border').siblings('li').removeClass('border');
			$spic.find('img').attr('src',ev.target.src);
			$('.bf').find('img').attr('src',ev.target.src);
		});

	


		//放大镜
		$spic.hover(function(){
			$('.sf').css('visibility','visible');
			$('.bf').css('visibility','visible');

			$('.sf').width($(this).width()*$('.bf').width()/$('.bpic').width());
			$('.sf').height($(this).height()*$('.bf').height()/$('.bpic').height());

			var $bili=$('.bpic').width()/$('.spic').width();

			$('.spic').on('mousemove',function(ev){
				var $left=ev.pageX-$('.spic').offset().left-$('.sf').width()/2;
				var $top=ev.pageY-$('.spic').offset().top-$('.sf').height()/2;	
				
				if($left<=0){
					$left=0;
				}else if($left>=$('.spic').width()-$('.sf').width()){
					$left=$('.spic').width()-$('.sf').width();
				}

				if($top<=0){
					$top=0;
				}else if($top>=$('.spic').height()-$('.sf').height()){
					$top=$('.spic').height()-$('.sf').height();
				}
				
				

				$('.sf').css({
					left:$left,
					top:$top
				});

				$('.bpic').css({
					left:-$bili*$left,
					top:-$bili*$top					
				});
				
			});
		},function(){
			$('.sf').css('visibility','hidden');
			$('.bf').css('visibility','hidden');
		});


		
	});


}(jQuery);