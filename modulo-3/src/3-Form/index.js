const form = document.querySelector('.sign-up__form')

const name =  document.querySelector('.name')
const email =  document.querySelector('.email')
const password =  document.querySelector('.password')

form.addEventListener('submit', ( event ) => {
  event.preventDefault()
  if (name.value.trim() !== '' && email.value.trim() !== '' && password.value.trim() !== '') {
    const userData = {
      name: name.value,
      email: email.value,
      password: password.value
    }
    console.log('Los datos ingresados por el usuario son')
    console.table(userData)
    alert('Formulario correctamente diligenciado')
    
  } else {
    alert('Por favor, ingresa un dato válido en el campo.')
  }
})