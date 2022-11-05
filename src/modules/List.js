import dots from '../icons/dots.svg';
import trash from '../icons/delete.svg';

export default class ToDoList {
  constructor() {
    this.list = JSON.parse(localStorage.getItem('data')) || [];
  }

  add(data) {
    const index = this.list.length + 1;
    data.index = index;
    this.list.push(data);
    localStorage.setItem('data', JSON.stringify(this.list));
  }

  remove(index) {
    this.list.splice(index - 1, 1);
    localStorage.setItem('data', JSON.stringify(this.list));
  }

  edit(data) {
    const { index, description } = data;
    this.list.forEach((element) => {
      if (element.index === parseInt(index, 10)) {
        element.description = description;
      }
    });
    localStorage.setItem('data', JSON.stringify(this.list));
  }

  getAll() {
    this.list = JSON.parse(localStorage.getItem('data')) || [];
    const data = [];
    this.list.forEach((item) => {
      const moreIcon = new Image();
      const trashIcon = new Image();
      const li = document.createElement('li');
      li.id = `task-${item.index}`;
      li.innerHTML = `
      <div class="checkbox-container">
        <input type="checkbox" id="cbox-${item.index}" value="first_checkbox" class='checkbox' ${item.completed ? 'checked' : ''}>
        <label for='cbox-${item.index}' id='label-${item.index}' class=' ${item.completed ? 'completed' : ''}'> 
          ${item.description}
        </label>
        <input class='input-edit-text display-none' type='text' name='editItem' id='editItem-${item.index}' value='${item.description}'/>
      <div>`;
      li.appendChild(moreIcon);
      li.appendChild(trashIcon);
      li.classList.add('row');
      li.classList.add('input');
      moreIcon.src = dots;
      moreIcon.classList.add('icon');
      moreIcon.classList.add('edit');
      moreIcon.id = `edit-${item.index}`;
      trashIcon.src = trash;
      trashIcon.classList.add('icon');
      trashIcon.classList.add('delete');
      trashIcon.classList.add('display-none');
      trashIcon.id = `delete-${item.index}`;
      data.push(li);
    });
    return data;
  }

  reindex() {
    let counter = 1;
    this.list.forEach((item) => {
      item.index = counter;
      counter += 1;
    });
    localStorage.setItem('data', JSON.stringify(this.list));
  }

  clearCompleted() {
    const newList = this.list.filter((element) => element.completed !== true);
    this.list = newList;
    localStorage.setItem('data', JSON.stringify(this.list));
  }
}