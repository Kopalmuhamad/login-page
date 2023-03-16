const login = document.querySelector('.login')
const create = document.querySelector('.create')
const formContainer = document.querySelector('.form-container')

login.onclick = function() {
    formContainer.classList.add('form-signin')
}

create.onclick = function() {
    formContainer.classList.remove('form-signin')
}