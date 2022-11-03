// eslint-disable-next-line  no-unused-vars

import { add } from "lodash"
const data = JSON.parse(localStorage.getItem('todo-list'));
const input = document.querySelector('.entered-list')
const addBtn = document.querySelector('.add-list')
const tasks = document.querySelector('.tasks')

export default input.addEventListener('keyup', () => {
  if(input.value.trim() != 0){
    addBtn.classList.add('active')
  } else {
    addBtn.classList.remove('active')
  }
})

addBtn.addEventListener('click', () => {
  if(input.value.trim() != 0){
    const newItem = document.createElement('div');
    newItem.classList.add('list-item')
    newItem.innerHTML = `<li class='task'>
    <input type='checkbox' id='checkBox'>
    <p>${input.value}</p>
    <img class="dots" src="91b1f318fbc3ef6f0456.png" alt="3 dots" style="cursor:pointer"/>
    </li>`

    tasks.appendChild(newItem);
    input.value = '';
  } else {
    alert('empty')
  }
})

tasks.addEventListener('click', (e) => {
  if(e.target.checked) {
    
  }
})