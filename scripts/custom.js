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

    $('.btn-boleto').click(function () {
        $("#modal-detalhes").removeClass("md-show");
        setTimeout(function () {
            $(".success-modal").addClass("md-show");

        }, 700);
    });

    $('#modal-boleto .md-close, .md-container').click(function () {
        if ($('#modal-boleto').hasClass('md-show')) {
            $("#modal-boleto").removeClass("md-show");
        }
    });


});

