$(document).ready(function(){
	
	$('.ima').mouseenter(function(){
		
		$(this).animate({height:'246px',width:'250px',top:'20px'},'slow');
		
	})
	$('.ima').mouseleave(function(){
		
		$(this).animate({height:'162.5px',width:'170px',top:'-=20px'},'slow');
		
	})
})
