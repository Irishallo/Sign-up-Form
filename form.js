let password1 = document.getElementById("password");
let password2 = document.getElementById("password2");
let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phonenumber");
const submitbtn = document.getElementById("submitbtn");

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function CheckPasswords() {
    if(password1.value == password2.value && password1.value.length != 0) {
        console.log("passwords correct");
        password1.classList.remove('error');
        password2.classList.remove('error');
    } else {
        console.log("passwords incorrect");
    }
}

function CheckName() {
    if(firstName.value.length != 0){
        console.log("firstname is " + firstName.value);
        firstName.classList.remove('error');
    } else {
        console.log("firstname not entered");
        firstName.classList.add('error');
    }

    if(lastName.value.length != 0){
        console.log("lastname is " + lastName.value);
        lastName.classList.remove('error');
    } else {
        console.log("lastname not entered");
        lastName.classList.add('error');
    }
}

function CheckEmail() {
    if(email.value.match(mailFormat)){
        console.log("email is " + email.value);
        email.classList.remove('error');
    } else {
        console.log("email not entered");
        email.classList.add('error');
    }
}

submitbtn.addEventListener('click', () => {
    CheckPasswords();
    CheckName();
    CheckEmail();
});