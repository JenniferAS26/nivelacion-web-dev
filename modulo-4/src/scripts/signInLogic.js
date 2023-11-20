import { fetchUserByParams } from '../services/api.js'

const sigInForm = document.querySelector('#signin-form')
const signinContainer = document.querySelector('.auth-container__signin')
const profileContainer = document.querySelector('.profile-container')

const usernameSpan = document.querySelector('.username-span')

const emailInput = document.querySelector('#signin-email')
const passwordInput = document.querySelector('#signin-password')

sigInForm.addEventListener('submit', async ( event ) => {
  event.preventDefault()
  const user = await fetchUserByParams({ email: emailInput.value })
  console.log(user[0])
  if (user.length) {
    if (user[0]?.password === passwordInput.value) {
      signinContainer.style.display = 'none'
      profileContainer.style.display = 'block'
      localStorage.setItem('userLogged', JSON.stringify(user[0]))
      sessionStorage.setItem('userAuth', JSON.stringify(user[0]))
      usernameSpan.textContent = user[0].username
    } else {
      console.log('try again')
    }
  } else {
    console.log('no existe el usuario')
  }
})