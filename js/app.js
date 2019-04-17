
formSubmit = () => {

  var name = document.getElementById('form-input-name').value; 
  var email = document.getElementById('form-input-email').value; 
  var phone = document.getElementById('form-input-phone').value; 
  var message = document.getElementById('form-input-message').value; 

  if (name != "" && email != "" && phone != "" && message != "") {
    $.post('email.php', {
      name: name, 
      email: email, 
      message: message, 
      phone: phone 
    }, function(data) {
        if (data === 'sent') {
          document.getElementById('contact-modal-text').innerHTML = `<p>Thank you for the message ${name}.</p> <p>I will get back to you as soon as possible</p>`; 
        } else {
          document.getElementById('contact-modal-text').innerHTML = `<p>Sorry! There was an error sending the message.</p>`;
        }
  
        $('#messageModal').modal('show');
      });
  }
  
}