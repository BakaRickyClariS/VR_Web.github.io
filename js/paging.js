
	
$(document).ready(function(){  //瘚桀�訫�舘汗���

����$(window).scroll(function(){
	����var $this = $(this);
	����var $this_Top = $this.scrollTop();
	����//�訜擃睃漲撠𤩺䲰80��嚗屸�𣈯�匧�憛� 
		if($this_Top < 60){
		����$('#top-bar').stop().animate({top:"60px",width:"90%",left:"5%"});
		}					
		if($this_Top > 60){
		����$('#top-bar').stop().animate({top:"0px",width:"100%",left:"0px"});   //憿舐內閬𣇉��
		}
����});
	$(window).resize(function() {
		wdth=$(window).width();
		if(wdth < 768){
			$("#top-bar").fadeOut();

		}else{
			$("#top-bar").fadeIn();

		}
	});
});
	
/*敹恍�笔�����𡁜����*/	
$(document).ready(function(){	
	$('#div00_b').click(function(){
	$('html,body').animate({scrollTop:'0px'},1500);
	});
	$('#div01_b').click(function(){
	$('html,body').animate({scrollTop:$('#div01').offset().top-100}, 1500);
	});
	$('#div02_b').click(function(){
	$('html,body').animate({scrollTop:$('#div02').offset().top-100}, 1500);
	});
	$('#div03_b').click(function(){
	$('html,body').animate({scrollTop:$('#div03').offset().top-100}, 1500);
	});
	$('#div04_b').click(function(){
	$('html,body').animate({scrollTop:$('#div04').offset().top-100}, 1500);
	});
	$('#div05_b').click(function(){
	$('html,body').animate({scrollTop:$('#div05').offset().top-100}, 1500);
	});
	$('#div06_b').click(function(){
	$('html,body').animate({scrollTop:$('#div06').offset().top-100}, 1500);
	});
	$('#div10_b').click(function(){
	$('html,body').animate({scrollTop:$('#div04').offset().top-100}, 1500);
	});
});

$(function(){
	//�訜皛煾�䭾�穃�交�撠晍iv��class��𥟇�𧪾ivOver
	$('.title_circle').hover(function(){
			$(this).addClass('title_circle_color02');		
		},function(){
			//皛煾�𧢲�蝘駁膄divOver璅���
			$(this).removeClass('title_circle_color02');	
			$(this).addClass('title_circle_color01');
		}
	);
});


$(document).ready(function(){  //�批捆瘚桀枂
����$(".float_up").animate({top: "30px",opacity: "0"},0);
				
	$(window).scroll(function(){
		var $this = $(this);
		var $this_Top = $this.scrollTop();

		//�訜擃睃漲撠𤩺䲰��𣇉���滨蔭-70%蝬脤�擃睃漲��嚗峕筑�枂��憛� 
		$('.float_up').each(function(){
			if($this_Top > $(this).offset().top - ($this.height() * 0.7)){
				$(this).animate({top: "0px",opacity: "1"},800);
			}
		});
		
	});
});
