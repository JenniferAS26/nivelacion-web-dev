const todoList = document.querySelector('.todo-list')
const span = document.querySelector('.span')

todoList.addEventListener('click', ( event ) => {
  if (event.target.className === 'item') {
    span.innerHTML = `Hiciste click en: ${event.target.textContent}`
    console.log(`Hiciste click en: ${event.target.textContent}`)
  }
})