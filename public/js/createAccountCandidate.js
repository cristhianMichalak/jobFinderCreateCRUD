const eyeSlashIconBtn = document.querySelector(`#eyeSlashIcon`)
const eyeIconBtn = document.querySelector(`#eyeIcon`)
const passwordInput = document.querySelector(`#passwordInput`)

//function to change input type to text
const changeTypeText = () => {
    passwordInput.type = `text`
    eyeSlashIconBtn.style.display = `none`
    eyeIconBtn.style.display = `inline`
}
//function to change input type to password
const changeTypePassword = () => {
    passwordInput.type = `password`
    eyeIconBtn.style.display = `none`
    eyeSlashIconBtn.style.display = `inline`
}

eyeSlashIconBtn.addEventListener(`click`, changeTypeText)
eyeIconBtn.addEventListener(`click`, changeTypePassword)

