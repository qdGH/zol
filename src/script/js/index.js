define(['jquery'],function($){
	return {
		//头部效果
		header:!function(){
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

					$searchtext=$('.search-text');
					$searchlist=$('.search ul');
					
					function taobao(data){
						var taobaoarr=data.result;
						var htmlstr='';
						for(var value of taobaoarr){
							htmlstr+='<li><a href="https://s.taobao.com/search?initiative_id=tbindexz_20170306&ie=utf8&spm=a21bo.2017.201856-taobao-item.2&sourceId=tb.index&search_type=item&ssid=s5-e&commend=all&imgfile=&q='+value[0]+'&suggest=0_3&_input_charset=utf-8&wq=a&suggest_query=a&source=suggest">'+value[0]+'</a></li>';
						}
						$searchlist.innerHTML=htmlstr;
					}
			
			
					$searchtext.oninput=function(){
					   var sCript=document.createElement('script');
					   sCript.src='https://suggest.taobao.com/sug?code=utf-8&q='+this.value+'&_ksTS=1536839023997_1203&callback=taobao&k=1&area=c2c&bucketid=1';
					   document.body.appendChild(sCript); 
					}

					
									

				}();
			});
		}(),


		//尾部效果
		footer:!function(){
			$('.footercontent').load('footer.html');
		}(),

		//电竞diy数据
		diydata:!function(){
			$coldiy=$('.game-diy .column-con')
			$.ajax({
				url:'http://10.31.162.72/qd2/zol/php/conndjdiy.php',
				dataType:'json'
			}).done(function(data){
				var htmlstr='<ul class="con-list clearfix">';
				$.each(data,function(index,value){
					htmlstr+=`<li class="item upward-ware">
								<div class="item-upward">
									<a href="#" class="pic">
										<img src="${value.url}" sid="${value.sid}">
									</a>	
								</div>
								<p class="ware-name">
									<a href="#">${value.title}</a>
								</p>
								<p class="price">¥${value.price}</p>	
							</li>`;
				});
				htmlstr+='</ul>';
				$coldiy.html(htmlstr);
			});
		}(),

		//热门数据

		//家电优选数据
		homeappliancedata:!function(){
			$colhomeappliance=$('.homeappliance-right .column-con')
			$.ajax({
				url:'http://10.31.162.72/qd2/zol/php/connhomeappliance.php',
				dataType:'json'
			}).done(function(data){
				var htmlstr='<ul>';
				$.each(data,function(index,value){
					$addressh=value.url.split(',');
					$title=value.title.split(',');
					$price=value.price.split(',');					
					htmlstr+=`<li class="tab-con">
								<ul class="con-list clearfix">
									<li class="item upward-ware">
										<div class="item-upward">
											<a href="#" class="pic">
												<img src="${$addressh[0]}" sid="${value.sid}">
											</a>	
										</div>
										<p class="ware-name">
											<a href="#">${$title[0]}</a>
										</p>
										<p class="price">¥${$price[0]}</p>	
									</li>
									<li class="item upward-ware">
										<div class="item-upward">
											<a href="#" class="pic">
												<img src="${$addressh[1]}" sid="${value.sid}">
											</a>	
										</div>
										<p class="ware-name">
											<a href="#">${$title[1]}</a>
										</p>
										<p class="price">¥${$price[1]}</p>	
									</li>
									<li class="item upward-ware">
										<div class="item-upward">
											<a href="#" class="pic">
												<img src="${$addressh[2]}" sid="${value.sid}">
											</a>	
										</div>
										<p class="ware-name">
											<a href="#">${$title[2]}</a>
										</p>
										<p class="price">¥${$price[2]}</p>	
									</li>
									<li class="item upward-ware">
										<div class="item-upward">
											<a href="#" class="pic">
												<img src="${$addressh[3]}" sid="${value.sid}">
											</a>	
										</div>
										<p class="ware-name">
											<a href="#">${$title[3]}</a>
										</p>
										<p class="price">¥${$price[3]}</p>	
									</li>
									<li class="item upward-ware">
										<div class="item-upward">
											<a href="#" class="pic">
												<img src="${$addressh[4]}" sid="${value.sid}">
											</a>	
										</div>
										<p class="ware-name">
											<a href="#">${$title[4]}</a>
										</p>
										<p class="price">¥${$price[4]}</p>	
									</li>
									<li class="item upward-ware">
										<div class="item-upward">
											<a href="#" class="pic">
												<img src="${$addressh[5]}" sid="${value.sid}">
											</a>	
										</div>
										<p class="ware-name">
											<a href="#">${$title[5]}</a>
										</p>
										<p class="price">¥${$price[5]}</p>	
									</li>
								</ul>
							</li>`;
				});
				htmlstr+='</ul>';
				$colhomeappliance.html(htmlstr);
			});

		}(),


		//摄影/摄像数据
		shedata:!function(){
			$colshe=$('.digital-left .column-con')
			$.ajax({
				url:'http://10.31.162.72/qd2/zol/php/connsheying.php',
				dataType:'json'
			}).done(function(data){
				var htmlstr='<ul class="con-list clearfix">'
				$.each(data,function(index,value){
					htmlstr+=`<li class="item upward-ware">
								<div class="item-upward">
									<a href="#" class="pic">
										<img src="${value.url}" sid="${value.sid}">
									</a>	
								</div>
								<p class="ware-name">
									<a href="#">${value.title}</a>
								</p>
								<p class="price">¥${value.price}</p>	
							</li>`;
				});
				htmlstr+='</ul>';
				$colshe.html(htmlstr);
			});
		}(),

		//笔记本数据
		bijibendata:!function(){
			$colbijiben=$('.digital-right .column-con')
			$.ajax({
				url:'http://10.31.162.72/qd2/zol/php/connbijiben.php',
				dataType:'json'
			}).done(function(data){
				var htmlstr='<ul class="con-list clearfix">'
				$.each(data,function(index,value){
					htmlstr+=`<li class="item upward-ware">
								<div class="item-upward">
									<a href="#" class="pic">
										<img src="${value.url}" sid="${value.sid}">
									</a>	
								</div>
								<p class="ware-name">
									<a href="#">${value.title}</a>
								</p>
								<p class="price">¥${value.price}</p>	
							</li>`;
				});
				htmlstr+='</ul>';
				$colbijiben.html(htmlstr);
			});
		}(),

		//本周热销数据
		hotselldata:!function(){
			$colhotsell=$('.weeksellwell .hotsell')
			$.ajax({
				url:'http://10.31.162.72/qd2/zol/php/connhotsell.php',
				dataType:'json'
			}).done(function(data){
				var htmlstr='<ul class="weeksellwell_list clearfix">'
				$.each(data,function(index,value){
					$address=value.url.split(',');
					htmlstr+=`<li class="item upward-ware">
								<div class="upward-region">
									<a href="http://10.31.162.72/qd2/zol/src/details.html?sid=${value.sid}" target="_blank" class="pic">
										<img src="${$address[0]}" alt="" sid="${value.sid}">	
									</a>	
								</div>
								<p class="ware-name">
									<a href="http://10.31.162.72/qd2/zol/src/details.html?sid=${value.sid}" target="_blank">${value.title}</a>
								</p>
								<p class="price">¥${value.price}</p>	
							</li>`;
				});
				htmlstr+='</ul>';
				$colhotsell.html(htmlstr);
			});
		}(),

		//轮播图
		banner:!function(){
			$banner=$('.banner');
			$ba=$('.b-box .b-pager a');
			$items=$('.b-box .b-pager .b-pager-item');
			$li=$('.b-viewport .focus-list li');
			$prev=$('.b-control-direction .b-prev');
			$next=$('.b-control-direction .b-next');  
			$num=0;      
			$items.on('click',function(){
				$num=$(this).index();
				bgchange($(this).index());
			});
		
			$next.hover(function(){
				$next.find('.bg-mask').show();
			},function(){
				$next.find('.bg-mask').hide();
			});
		
			$prev.hover(function(){
				$prev.find('.bg-mask').show();
			},function(){
				$prev.find('.bg-mask').hide();
			});
		
			$next.on('click',function(){
				$num++;
				if($num>2){
					$num=0;
				}
				bgchange($num);
			});
		
			$prev.on('click',function(){
				$num--;
				if($num<0){
					$num=2;
				}
				bgchange($num);	
			});
		
			function bgchange(element){
				$ba.removeClass('active');
				$items.eq(element).find('a').addClass('active');
				$li.eq(element).animate({opacity:1}).siblings('li').animate({opacity:0});
			};
			
			$timer=setInterval(function(){
				$num++;
				if($num>2){
					$num=0;
				}
				bgchange($num);
			},3000);
		
			$banner.hover(function(){
				clearInterval($timer);
			});
		}(),

		//团购幻灯片
		groupchange:!function(){
			$tuanlist=$('.tuan-list');
			$tuanul=$('.tuan-list ul');
			$tuanli=$('.tuan-list li');
			$groupbuy=$('.groupbuy');
			$gbpagerli=$('.gb-controls .gb-pager-item');
			$gbprev=$('.gb-controls .gb-prev');
			$gbnext=$('.gb-controls .gb-next');		
			$num1=0;
			$last=$tuanul.first().clone();
			$tuanlist.append($last);
			$first=$tuanul.last().clone();
			$tuanlist.prepend($first);

			var $bstop=true;

			$tuanlist.css({
				left:-1200
			});

		
			$tuanlist.css({width:6000});
		
			$tuanli.hover(function(){
				$(this).find('.tuan-pro-intro').stop(true).animate({top:-150},200);
			},function(){
				$(this).find('.tuan-pro-intro').stop(true).animate({top:0},200);
			});
		
			$groupbuy.hover(function(){
				$gbprev.show();
				$gbnext.show();
			},function(){
				$gbprev.hide();
				$gbnext.hide();
			});

			$gbpagerli.on('click',function(){
				$(this).addClass('bgchange').siblings('li').removeClass('bgchange');
				$tuanlist.stop().animate({
					left:-($(this).index()+1)*1200
				});
			});

			$gbnext.on('click',function(){
				if($bstop){
					$bstop=false;
					$num1++;
					move();
				}
			});

			$gbprev.on('click',function(){

				if($bstop){
					$bstop=false;
					$num1--;
					move();

				}
			});
			
		

			var $timer1=setInterval(function(){
				if($bstop){
					$bstop=false;
					$num1++;
					move();
				}
			},3000);
			
			$('.brandchoice-inner').hover(function(){
				clearInterval($timer1);
			},function(){
				setInterval(function(){
					if($bstop){
						$bstop=false;
						$num1++;
						move();
					}
				},3000);
			});

			function move(){
				$tuanlist.stop(true,true).animate({
					left:-($num1+1)*1200
				},800,function(){
					if($num1==3){
						$tuanlist.css({left:-1200});
						$num1=0
					}
					if($num1==-1){
						$tuanlist.css({left:-3600});
						$num1=2
					}
					$gbpagerli.eq($num1).addClass('bgchange').siblings('li').removeClass('bgchange');
					$bstop=true;
				});
				console.log($bstop);

				
			};
		

			


		}(),

		//Z智选
		zselect:!function(){
			$noopsychefocustabli=$('.noopsyche-focus-tab li');
			$noopsychefocuspicsli=$('.noopsyche-focus-pics li');
			$noopsychefocustabli.hover(function(){
				$(this).addClass('bgchange').siblings('li').removeClass('bgchange');
				$noopsychefocuspicsli.eq($(this).index()).show().siblings('li').hide();
			})
		
		
			$noopsychelist=$('.noopsyche-list li');
			$noopsychelist.hover(function(){
				$(this).find('div').stop(true).animate({top:0,paddingTop:33},300);
			},function(){
				$(this).find('div').stop(true).animate({top:152,paddingTop:0},300);
			});
		
			$noopsycheimg=$('.noopsyche-pics img');
			$noopsycheimg.hover(function(){
				$(this).css({'transform':'scale(1.1,1.1)'});
			},function(){
				$(this).css({'transform':'scale(1,1)'});
			});
		}(),

		//电子竞技tab切换
		gametab:!function(){
			$tabbtn=$('.game-inner .tab-btn');
			$banli=$('.ban-viewport-list li');
			$conlist=$('.homeappliance-goods .con-list')
			$tabbtn.on('click',function(){
				$(this).addClass('active').siblings('li').removeClass('active');
				$banli.eq($(this).index()).show().siblings('li').hide();
				$conlist.eq($(this).index()).show().siblings('ul').hide();
			});


		}(),


		//家电优选tab切换
		homeappliancetab:!function(){
			$tabbtn=$('.homeappliance-right .tab-btn');
			$tabcon=$('.homeappliance-right .tab-con');
			$homecol=$('.homeappliance-right .column-con');
			$tabbtn.on('click',function(){
				$(this).addClass('active').siblings('li').removeClass('active');
				$('.homeappliance-right .tab-con').eq($(this).index()).show().siblings().hide();
			});	
		}(),

		//品牌精选
		brandchoice:!function(){
			$brandchoiceitem=$('.brandchoice-inner .item');
			$brandchoiceitem.hover(function(){
				$(this).find('.changebig').css({'transform':'scale(1.1,1.1)'});
			},function(){
				$(this).find('.changebig').css({'transform':'scale(1,1)'});
			});		
		}(),

		//楼梯
		louti:!function(){
			$louti=$('.navbarfixed');
			$loutia=$('.navbarfixed a');
			$louceng=$('.louceng');
			$(window).on('scroll',function(){
				var $scrolltop=$(window).scrollTop();
				if($scrolltop>=600){
					$louti.show();
				}else{
					$louti.hide();
				};
			});
			$loutia.not('.backtop').on('click',function(){
				var $top=$louceng.eq($(this).index()).offset().top;
				$('html,body').animate({
					scrollTop:$top-50
				});
			});
		
			$('.backtop').on('click',function(){
				$('html,body').animate({
					scrollTop: 0
				},600);
			});
		}(),

		//顶部搜索框
		topsearch:!function(){
			$topsearch=$('.search-fixed');
			$(window).on('scroll',function(){
				var $scrolltop=$(window).scrollTop();
				if($scrolltop>=600){
					$topsearch.show();
				}else{
					$topsearch.hide();
				};
			});
		}(),

		//头部登录注册
		topregister:!function(){
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
		}(),

		//右侧固定
		rightbar:!function(){
			$tool=$('.rightbar .tool');
			$tool.on('click',function(){
				$('html,body').animate({
					scrollTop:0
				});
			});

			$tabico=$('.tabbox .ico');
			$movetab=$('.movetab');
			$tabico.hover(function(){
				$(this).css({
					backgroundColor:'#f33'
				});
				$movetab.eq($(this).index()).show();
			},function(){
				$(this).css({
					backgroundColor:'#333'
				});
				$movetab.eq($(this).index()).hide();
			});
		}(),


	}
}); 
