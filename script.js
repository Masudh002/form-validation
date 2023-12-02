const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmation = document.getElementById('Confirm-password');

form.addEventListener('submit', e =>{
    e.preventDefault();
    checkInputs();
}
);
function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmationValue = confirmation.value.trim();

    if(usernameValue === ""){
        setErrorFor(username, 'username cannot be blank');
    }
    else if (!isNaN(usernameValue)){
        setErrorFor(username,'username cannot be a number');
    }
    else{
        setSuccessFor(username);
    }
    if(emailValue === ""){
        setErrorFor(email, 'email cannot be blank');
    } /*else if (!isValidEmail(emailValue)){
        setErrorFor(email,'Enter a valid email');
    }*/
    
        else{
        setSuccessFor(email);
    }
    if(passwordValue === ""){
        setErrorFor(password, 'password cannot be blank');
    }else{
        setSuccessFor(password);
    }
    if(confirmationValue === ""){
        setErrorFor(confirmation, 'confirm password cannot be blank');
    }else if(
        passwordValue !== confirmationValue
    ){
        setErrorFor(confirmation, 'passwords does not match');
    }
    else{
        setSuccessFor(confirmation);
    }
}

function setErrorFor(input, message){
    const formname = input.parentElement;
    const small = formname.querySelector('small');
    formname.className = 'formname error';
    small.innerText = message;
}
function setSuccessFor (input){
    const formname = input.parentElement;
    formname.className = 'formname success';
}

/*function isValidEmail(email){
    return 
}*/
