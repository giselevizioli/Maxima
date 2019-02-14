$(document).ready(function() {
	$('#login-button').click(function(e){
		e.preventDefault();

		$('form').fadeOut('slow');
		setTimeout(function(){ 
		}, 500);

        $('.main-wrapper').fadeOut(700);

        setTimeout(function () {
            $('.spin-overlay').fadeIn();
            setTimeout(function () {
                $('.spin-overlay').fadeOut();
            }, 2000);
        }, 1000);

		setTimeout(function(){
			$('.customer-data').fadeIn('slow');
		},3000);		
    });

    $("#money").inputmask('decimal', {
        'alias': 'numeric',
        'groupSeparator': '.',
        'autoGroup': true,
        'digits': 2,
        'radixPoint': ",",
        'digitsOptional': false,
        'allowMinus': false,
        'prefix': 'R$',
        'placeholder': ''
    });

    $('#datepicker').datepicker({
        language: 'pt-BR',
        format: 'dd-mm-yyyy'
    });

    $('#expandBtn').click(function () {
        $('.expanded-content').toggleClass('container-expanded');
        $('html,body').animate({ scrollTop: $('#expandWrapper').offset().top }, '500');
    });

});

