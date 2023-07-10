let textValidation = document.getElementById("validation-text");
let emailValidation = document.getElementById('email');
let imageError = document.getElementById('error-img');


// Display a message error if user inputed wrong validate email
function validateEmail(emailCheck) {
var mailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


if(emailCheck.value.match(mailRegex)) {
    textValidation.style.display = 'none';
    imageError.style.display = 'none';
    emailValidation.style.border = '1px solid #ce9797';

    return true;
}

else {
   textValidation.innerHTML = 'Please provide a valid email';
   imageError.style.display = 'block';
   emailValidation.style.border = '2px solid #f96262';
   emailValidation.style.opacity = '1';
   
    return false;
 }
  }    