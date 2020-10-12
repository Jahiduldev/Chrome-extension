$(function(){


	$('#name').keyup(function(){
		$('#great').text('Hello ' +  $('#name').val());
	})
})