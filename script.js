const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')
const button = document.querySelector('.button')
const row = document.getElementById('password-row')

button.addEventListener('click', function(event) {
    if (password.value || confirmPassword.value) {
        if (password.value != confirmPassword.value) {
            row.classList.add('error')
            password.setAttribute('style', 'border: 1px solid red')
            confirmPassword.setAttribute('style', 'border: 1px solid red')

        }
        else {
            password.removeAttribute('style')
            confirmPassword.removeAttribute('style')
            row.classList.remove('error')

        }
    }
    
})

