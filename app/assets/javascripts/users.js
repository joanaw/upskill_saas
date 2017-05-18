/* global $, Stripe */
// Document ready. 
$(document).on('turbolinks:load', function(){
  
  // Set Stripe Public Key.
  Stripe.setPublishableKey( $('meta[name="stripe-key"]').attr('content') );
  var theForm = $('#pro_form');
  var submitBtn = $('#form-submit-btn');
  
  // When user click submit button, 
  submitBtn.click(function(event){
    //prevent deaufult submission behavior.
    event.preventDefault()
    
    // Collect the credit card fields.
    var ccNUM = $('#card_number').val(),
      cvcNum = $('#card_code').val(),
      expMonth = $('#card_month').val(),
      expYear = $('#card_year').val();
      
    // Send the card info to Stripe.
    Stripe.createToken ({
      number: ccNUM,
      cvc: cvcNum,
      exp_month: expMonth,
      exp_year: expYear
    }, stripeResponseHandler);
    });
  
  // Collect the credit card fields.
  
  // Send the card info to Stripe.
  
  // Stripe will return back a card token.
  
  // Inject card token as hidden field into form.
  
  //Submit form to our Rails application. 
})
