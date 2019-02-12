$(document).ready(function() {
	$('#login-button').click(function(e){
		e.preventDefault();

		$('form').fadeOut('slow');
		setTimeout(function(){ 
		}, 500);

		$('.main-wrapper').fadeOut(700);

		setTimeout(function(){
			$('.customer-data').fadeIn('slow');
		},1000);		
	});

	$('#dividas').DataTable({
		paging: false,
		searching: false,
		ordering: false,
		"info": false
	});

	

});

