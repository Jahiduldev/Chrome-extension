$(function(){

	
	$('#saveLimit').click(function(){ 

		var limit = $('#limit').val();
		if (limit) {

			chrome.storage.sync.set({"limit": limit}, function(){

				// console.log(limit);
				close();
			});
		}

		
	});


	$('#resetTotal').click(function(){

		chrome.storage.sync.set({"total":0});

	});

});