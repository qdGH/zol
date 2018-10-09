!function($){

    $citylocation=$('.city-location');
	$citylist=$('.city-location .city-list');

	console.log($citylist.html());

	$citylocation.hover(function(){
		$citylist.show();
		alert(2);
	},function(){
		$citylist.hide();
	});
}(jQuery);