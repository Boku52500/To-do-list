// eslint-disable-next-line  no-unused-vars
const data = JSON.parse(localStorage.getItem('todo-list'));
const list = document.querySelector('.list');
const tasks = [
  {
    description: 'Finishing project',
    completed: false,
    index: 0,
  }, {
    description: 'Learning tasks',
    completed: false,
    index: 1,
  }, {
    description: 'Approving project',
    completed: false,
    index: 2,
  },
];

export default class Actions {
  static showTask(data) {
    let li = '';
    if (data) {
      data.forEach((toDo, id) => {
        li += `<li class='task'>
      <input type='checkbox' id='${id}'>
      <p>${toDo.description}</p>
      <img class="dots" src="91b1f318fbc3ef6f0456.png" alt="3 dots" style="cursor:pointer"/>
      </li>
      `;
      });
    }
    list.innerHTML = li;
  }

  static addElem() {
    tasks.forEach(() => {
      let li = '';
      if (tasks) {
        tasks.forEach((toDo, id) => {
          li += `<li class='task'>
        <input type='checkbox' id='${id}'>
        <p>${toDo.description}</p>
        <img class="dots" src="91b1f318fbc3ef6f0456.png" alt="3 dots" style="cursor:pointer"/>
        </li>
        `;
        });
      }
      list.innerHTML = li;
    });
  }
}