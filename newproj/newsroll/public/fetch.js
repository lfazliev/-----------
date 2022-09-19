{
  title: String
  done: Boolean
}

const renderTodos = (obj) => {
  const div = document.createElement('div')
  const p = document.createElement('p')
  p.innerText = obj.title
  const check = document.createElement('input')
  check.type = 'checkbox'
  check.dataset.id = obj._id
  if (obj.done) {
    check.checked = 'checked'
  }
  check.onclick = async function () {
    let result = await fetch('/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ _id: this.dataset.id, done: this.checked })
    })
  }
  div.appendChild(p)
  div.appendChild(check)
  todo.appendChild(div)
}

window.onload = async () => {
  let response = await fetch('/todos')
  const todos = await response.json()
  for (el of todos.data) {
    renderTodos(el)
  }
}

add.onkeypress = async (e) => {
  if (e.key == 'Enter') {
    let result = await fetch('/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ title: add.value, done: false })
    })
    const res = await result.json()
    renderTodos({ title: add.value, done: false, _id: res.result.insertedId })
    add.value = ''
  }
}