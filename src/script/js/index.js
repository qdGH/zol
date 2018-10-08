!function($){
	$('.topcontent').load('header.html');
	$('.footercontent').load('footer.html');

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

	//Z智选

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

	
}(jQuery);