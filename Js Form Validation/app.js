const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cnic = document.querySelector('#cnic');

let usernameRegex = /^[a-zA-Z0-9]{4,15}$/;
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
let cnicRegex = /^42\d{11}$/;
form.addEventListener('submit' , (event)=>{
    event.preventDefault()
    if(usernameRegex.test(username.value)){
        console.log(username.value);
       
    }
    if(emailRegex.test(email.value) === true){
        console.log(email.value);
    }
     
     if(passwordRegex.test(password.value)  === true){
        console.log(password.value);
    }
       if(cnicRegex.test(cnic.value) === true){
        console.log(cnic.value);
    }
    
})