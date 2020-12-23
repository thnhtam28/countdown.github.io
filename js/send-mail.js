(function ($) {
	
	$(function () {
		var contactForm = $('#contact-form');
		var loader = contactForm.find('.ajax-loader');

		$(".submit").click(function (e)
		{
			if (contactForm.valid())
			{
				loader.css('display', 'block');

				// handle the form submission event
				e.preventDefault();

				$.ajax({
					url: "https://formspree.io/f/xnqoodvl",
					type: "POST",
					dataType: "json",
					data: {
						name: $("#name").val(),
						email: $("#email").val(),
						subject: $("#subject").val(),
						message: $("#message").val()
						
					},
					success: function (data) {
						loader.hide();
						contactForm.clearForm();
					},
					error: function (error) {
						$('.alert').addClass('error');
					}
				});

				$('.alert').fadeIn().delay(2000).fadeOut();
			}
			
			return false
		});
	
	});
	
	$.fn.clearForm = function() {
	  return this.each(function() {
	    var type = this.type, tag = this.tagName.toLowerCase();
	    if (tag == 'form')
	      return $(':input',this).clearForm();
	    if (type == 'text' || type == 'password' || tag == 'textarea')
	      this.value = '';
	    else if (type == 'checkbox' || type == 'radio')
	      this.checked = false;
	    else if (tag == 'select')
	      this.selectedIndex = -1;
	  });
	};
})(jQuery);