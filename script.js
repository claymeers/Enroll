// Sliding between registration and login mode
const sign_in_btn = document.querySelector('#sign-in-btn')
const sign_up_btn = document.querySelector('#sign-up-btn')
const container = document.querySelector('.container')

sign_up_btn.addEventListener('click', () => {
    container.classList.add('sign-up-mode')
})

sign_in_btn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode')
})

// Show/ hide password
const hidePwd = document.querySelectorAll('.hidePwd')
const pwdField = document.querySelectorAll('.password')

hidePwd.forEach((icon) => {
    icon.addEventListener('click', () => {
        pwdField.forEach((field) => {
            if (field.type === 'password') {
                field.type ='text'
                hidePwd.forEach((icon) => {
                    icon.classList.replace('uil-eye-slash', 'uil-eye')
                })
            } else {
                field.type ='password'
                hidePwd.forEach((icon) => {
                    icon.classList.replace('uil-eye', 'uil-eye-slash')
                })
            }
        })
    })
})

// Form validation client-side
const formIn = document.querySelector('.sign-in-form')
const formUp = document.querySelector('.sign-up-form')
const username = document.querySelector('.username')
const signupUsername = document.querySelector('.signup-username')
const email = document.querySelector('.signup-email')
const password = document.querySelector('.password')
const signupPassword = document.querySelector('.signup-pwd')
const passwordCheck = document.querySelector('.signup-check')

formIn.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputsIn();
})

formUp.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputsUp();
})

function checkInputsIn() {
    // get the values of input
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank!')
    } else {
        setSuccessFor(username)
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank!')
    } else {
        setSuccessFor(password)
    }
}

function checkInputsUp() {
    const signupUsernameValue = signupUsername.value.trim();
    const emailValue = email.value.trim(); 
    const signupPasswordValue = signupPassword.value.trim();
    const pwdCheckValue = passwordCheck.value.trim();

    if (signupUsernameValue === '') {
        setErrorFor(signupUsername, 'Username cannot be blank!')
    } else {
        setSuccessFor(signupUsername)
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank!')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'This email is not valid!')
    } else {
        setSuccessFor(email)
    }

    if (signupPasswordValue === '') {
        setErrorFor(signupPassword, 'Password cannot be blank!')
    } else {
        setSuccessFor(signupPassword)
    }

    if (pwdCheckValue === '') {
        setErrorFor(passwordCheck, 'Password cannot be blank!')
    } else if (pwdCheckValue !== signupPasswordValue) {
        setErrorFor(passwordCheck, 'Passwords does not match!')
    } else {
        setSuccessFor(passwordCheck)
    }
}

function setErrorFor(input, message) {
    const inputField = input.parentElement;
    const small = inputField.querySelector('small')
    small.innerText = message
    inputField.className = 'input-field error'
}

function setSuccessFor(input) {
    const inputField = input.parentElement;
    inputField.className = 'input-field success'
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}