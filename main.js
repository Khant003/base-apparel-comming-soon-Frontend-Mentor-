const form = document.querySelector('.form')
const emailInput = document.querySelector('.email-input')


form.addEventListener('submit',(e) => {
    e.preventDefault()
    checkInput()
})

function checkInput () {
    const inputValue = emailInput.value.trim() 
    if (inputValue == "") {
        setError(emailInput,"Email cannot be blank")
    }else if (!validateEmail(inputValue)) {
        setError(emailInput,"This email is not validate")
    }else {
        setSuccess(emailInput)
    }
}

function setError (input,msg) {
    const errorForm = input.parentElement
    const errMsg = errorForm.querySelector('.error-msg')
    errorForm.classList = "form active"
    errMsg.innerHTML = msg
}

function setSuccess (input) {
    const successForm = input.parentElement
    successForm.classList = "form"
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
