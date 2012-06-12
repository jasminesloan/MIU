// JQUERY VALIDATION FORM

		var parsePurchaseForm = function(data) {
		//uses form data here;
			console.log(data);
		};
		
		$(document).bind('pageinit',function(){
		
		var pform = $('#purchaseform');
		
			jQuery.validator.messages.required = "Required";
			pform.validate({
				invalidHandler: function(form, validator) {},
				submitHandler: function() {
					var data = pform.serializeArray();
					parsePurchaseForm(data);
		}
	});
		
});
	
