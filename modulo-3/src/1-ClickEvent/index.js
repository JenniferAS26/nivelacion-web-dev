const div = document.querySelector('.square')
const button = document.querySelector('.button')

let currentColor = true

button.addEventListener('click', () => {
  if (currentColor) {
    div.style.backgroundColor = '#DAFDBA'
  } else {
    div.style.backgroundColor = '#FFC2B5'
  }
  currentColor = !currentColor
})