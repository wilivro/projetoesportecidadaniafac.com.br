$(function(){
	$('#content_bloco').children('div').css({'display':'none'});
	$('#content_home').css({'display':'block'});

	$('#menu ul li a').click(function(){
		var btId = $(this).attr('id');

		$('#content_bloco').children('div').css({'display':'none'});
		$('#content_'+btId).css({'display':'block'});
	});
	$('#click').click(function(){
		$('#content_cursos').css("display","none");
		$('#content_projeto').css("display","block");
	});
});