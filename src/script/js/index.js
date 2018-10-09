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
				$coldiy.html(htmlstr);
			});
		}(),

		//热门数据


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
									<a href="#" target="_blank" class="pic">
										<img src="${$address[0]}" alt="" sid="${value.sid}">	
									</a>	
								</div>
								<p class="ware-name">
									<a href="#" target="_blank">${value.title}</a>
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
			$tuanli=$('.tuan-list li');
			$groupbuy=$('.groupbuy');
			$gbpagerli=$('.gb-controls .gb-pager-item');
			$gbprev=$('.gb-controls .gb-prev');
			$gbnext=$('.gb-controls .gb-next');		
			$num=0;
		
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
			})
		
			$gbpagerli.on('click',function(){
				$num=$(this).index();
				$(this).addClass('bgchange').siblings('li').removeClass('bgchange');
				$tuanlist.animate({
					left:-($(this).index()+1)*1200
				});
			});
		


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


	}
}); 
