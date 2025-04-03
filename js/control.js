$(function(){
	
	$("#SMALL img").mouseenter(function(){
		
		var N = $(this).attr("id").substr(2);
		
		$("#BIG").attr( "src" , "picture/VR-text0" + N + ".png" );	
		
		switch(N){
			case "1":
			$('#bgp').css("background-image","url(picture/VR-bg01.png)");
			break;
			case "2":
			$('#bgp').css("background-image","url(picture/VR-bg02.png)");
			break;
			case "3":
			$('#bgp').css("background-image","url(picture/VR-bg03.png)");
			break;
			case "4":
			$('#bgp').css("background-image","url(picture/VR-bg0)");
			break;
		}
	});
	$("#BIG").click(function(){
		$('#bgp').css("background-image","url(picture/introd-bg.png)");
		$("#BIG").attr( "src" , "picture/VR-text.png" );
	});
});

