var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
  var name = document.getElementById('contact_name').value; // check value of input name field

  if (name.length == 0) {
    nameError.innerHTML = '*required';
    return false;
  } else if (!name.match(/^[A-Z][a-z]* [A-Z][a-z]*$/)) {
    nameError.innerHTML = '*Enter Full Name';
    return false;
  } else {
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
  }
}

//For phone 
function validatePhone() {
  var phone = document.getElementById('contact_phone').value; // Get the value of the input phone field

  if (phone.length === 0) {
    phoneError.innerHTML = '* Required';
    return false;
  }

  if (phone.length !== 10) {
    phoneError.innerHTML = '* Please enter a 10-digit number';
    return false;
  }

  if (!/^[0-9]{10}$/.test(phone)) {
    phoneError.innerHTML = '* Only Digits';
    return false;
  }

  phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

//For email

function validateEmail() {
  var email = document.getElementById('contact_email').value; // Get the value of the email input field

  if (email.length === 0) {
    emailError.innerHTML = '* Required';
    return false;
  }

  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailPattern.test(email)) {
    emailError.innerHTML = '* Please enter a valid email address';
    return false;
  }

  emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}


//For message
function validateMessage(){
  var message = document.getElementById('contact_message').value;
  var required = 30;
  var left = required - message.length;

  if(left > 0){
    messageError.innerHTML = left + 'more characters required ';
    return false;
  }

  messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateForm(){
  if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {

    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fix the error to submit';

    // Hide the error message after 3 seconds (3000 milliseconds)
    setTimeout(function() {
      submitError.style.display = 'none';
    }, 3000);

    return false;
  }
}