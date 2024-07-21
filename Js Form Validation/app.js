const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cnic = document.querySelector('#cnic');

let usernameRegex = /^[a-zA-Z0-9]{4,15}$/;
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
let cnicRegex = /^42\d{11}$/;
const values = document.getElementById('values');


    form.addEventListener('submit',(event)=>{
        event.preventDefault();
        if(username.value === '' && email.value === '' && password.value === '' && cnic.value === ''){
            alert(`Please fill out below fields`);
        }
        else if(username.value === ''){
            alert(`Please fill the *username* field`);
        }
        else if(email.value === ''){
            alert(`Please fill the *email* field`);
        }
        else if(password.value === ''){
            alert(`Please fill the *password* field`);
        }

        else if(cnic.value === ''){
            alert(`Please fill the *cnic* field`);
        }

        else{

            
     if (usernameRegex.test(username.value) === true) {
        console.log(username.value);
      } else {
          alert("Invalid username. Please ensure your username meets the following criteria:\n\n" +
          "1. Is between 4 and 15 characters long.\n" +
          "2. Contains only letters (both lowercase and uppercase) and digits.");
          return false;
           }


    if(emailRegex.test(email.value) === true){
        console.log(email.value);
    }
    else{
        alert("Invalid email address. Please ensure your email meets the following criteria:\n\n" +
        "1. Starts with one or more characters that can include letters (both lowercase and uppercase), digits, dots (.), underscores (_), percentage signs (%), plus signs (+), or hyphens (-).\n" +
        "2. Followed by an @ symbol.\n" +
        "3. Followed by one or more characters that can include letters (both lowercase and uppercase), digits, dots (.), or hyphens (-).\n" +
        "4. Followed by a dot (.) symbol.\n" +
        "5. Ends with two or more letters (both lowercase and uppercase).");
        return false;
    }
    

    if(passwordRegex.test(password.value)  === true){
        console.log(password.value);
    }
    else{
        alert("Invalid password. Please ensure your password meets the following criteria:\n\n" +
        "1. Contains at least one uppercase letter.\n" +
        "2. Contains at least one special character from the set: !@#$%^&*()_+-=[]{};':\"\\|,.<>/?\n" +
        "3. Is at least 8 characters long.");
        return false;
    }
    
    

    if(cnicRegex.test(cnic.value) === true){
        console.log(cnic.value);
    }else{
        alert("Invalid CNIC. Please ensure your CNIC meets the following criteria:\n\n" +
        "1. Starts with the digits '42'.\n" +
        "2. Followed by exactly 11 digits, making a total of 13 characters.");
      return false;
    }
    
    if(usernameRegex.test(username.value) === true && emailRegex.test(email.value) === true && passwordRegex.test(password.value)  === true && cnicRegex.test(cnic.value) === true){
         alert('Login Successfull');
         values.innerHTML = `<h4>Username: ${username.value}<br>
         Email: ${email.value}<br>
         Password : ${password.value}<br>
         Cnic : ${cnic.value}
         </h4>

         `
         username.value = '';
         email.value = '';
         password.value = '';
         cnic.value = '';
        
    }
}
})