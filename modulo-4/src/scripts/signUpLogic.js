import { createUser } from '../services/api.js'

const signUpForm = document.querySelector('#signup-form')
const registerContainer = document.querySelector('.auth-container__register')
const profileContainer = document.querySelector('.profile-container')


signUpForm.addEventListener('submit', async ( event ) => {
  event.preventDefault()
  const signUpUsername = document.querySelector('#signup-username').value
  const signUpEmail = document.querySelector('#signup-email').value
  const signUpPassword = document.querySelector('#signup-password').value
  const userData = {
    username: signUpUsername,
    email: signUpEmail,
    password: signUpPassword
  }

  await createUser(userData)
  registerContainer.style.display = 'none'
  profileContainer.style.display = 'block'
})

