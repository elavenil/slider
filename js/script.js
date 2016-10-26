$(document).ready(function(){
/* -------------------------------*/

	var liWidth = $(".slider li").outerWidth();
	var liCount = $(".slider li").index() + 1;
	var conWidth = $(".slider-container").outerWidth();

	var ulWidth = (liWidth * liCount);
	var movWidth =  ulWidth - conWidth;
	
	$(".slider").css('width',ulWidth + 'px');
	
	//alert(conWidth);
	//alert(ulWidth / liWidth);
	//alert(conWidth / liWidth);

	var viewPortSlides = conWidth / liWidth;
	var allowedSlides = liCount - viewPortSlides;

	var liFinished = 0;
	var liBalance = liCount - viewPortSlides;
	
	//alert(allowedSlides);
	var sliderValue = 1;

	$(".next").bind('click',function(e){
		e.preventDefault();
		$(".next").fadeIn();

if(liBalance <= viewPortSlides){
	viewPortSlides = liBalance;
	$(".next").fadeOut();
}else{
	
}

			//$(".slider").animate({marginLeft: '-='+(liWidth*viewPortSlides)},'fast');

			$(".slider").animate({
				 marginLeft: '-='+(liWidth*viewPortSlides)
			   },
			   {
				 duration: 1000,
				 complete: function(){
					//console.log(liBalance);
				}
			});


			sliderValue+=1;
			$(".prev").fadeIn();

		liBalance -= viewPortSlides;

		console.log(liBalance);

	});
	$(".prev").bind('click',function(e){
		e.preventDefault();
		/*if(sliderValue > 1)
		{
			if(sliderValue == allowedSlides+1)
			{
				$(".next").fadeIn();
			}
			$(".slider").animate({marginLeft: '+='+(liWidth*viewPortSlides)},'fast')
			sliderValue-=1;
			if(sliderValue == 1)
			{
				$(".prev").fadeOut();
			}
		}*/

		$(".slider").animate({marginLeft: '+='+(liWidth*viewPortSlides)},'fast')
			sliderValue-=1;

		liBalance -= viewPortSlides;
			
	});
		


	

	
	



/* -------------------------------*/

});