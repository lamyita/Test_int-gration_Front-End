
//////////////////function for eye hide and show password///////////////////////////////
$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

//////////////////////////////////////Validation/////////////////////
const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("passwordConfirmation");
const showPassword = document.getElementById("show-password");
const showPasswordConfirmation = document.getElementById("show-password-confirmation"); 
//Show input error message
function ShowError(input, message) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group error";
    const small = formGroup.querySelector('small');
    small.innerText = message;
  }


  ///////////////////Show input success///////////////////

  function ShowSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group success";
  }

   /////////////////// funcTion lenght full name ////////////////////
   function CheckLenght(input, min, max) {
    if (input.value.length < min) {
      ShowError(input, ` doit comporter moins de ${max} caractères`);
       
    }else if(input.value.length > max){
      ShowError(input, ` must be less then ${min} characters`);
    }else {
      ShowSuccess(input);
    }
  }

//:///////////////Check email ///////////////////////////////////////////////////////////
function CheckEmail(input) {
    const char = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (char.test(input.value.trim())) {
      ShowSuccess(input);
    }else {
      ShowError(input, "Email n'est pas valide ");
    }
  }

  function CheckRequired(inputErr) {
    inputErr.forEach(function(input){
     ////Remove whitespace from both sides of a string: trim
      if (input.value.trim() === "") {
        ShowError(input, `la confirmation du mot de passe est requise`);
      }else {
        ShowSuccess(input);
      }
    });
  }



 

  function CheckPasswordsMatch(input1,input2) {
    if (input1.value !== input2.value) {
      ShowError(input2, "Mot de passe pas correct");
      
    }
  }



////////////////////// function for cheke min et max name & password & check password with password confirmation iff match or no
  form.addEventListener('submit', function(e){
      if (!showPassword.classList.contains("eye-icon-addMargin")) {
        showPassword.classList.add("eye-icon-addMargin");
      }
      if (!showPasswordConfirmation.classList.contains("eye-icon-addMargin")) {
        showPasswordConfirmation.classList.add("eye-icon-addMargin")
      }
    
    
    e.preventDefault();
  
    CheckRequired([fullname, email, password, passwordConfirmation]);
    CheckLenght(fullname, 3, 12);
    CheckLenght(password, 4, 6);
    CheckEmail(email);
    CheckPasswordsMatch(password, passwordConfirmation);
  });



