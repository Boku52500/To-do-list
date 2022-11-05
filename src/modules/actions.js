import ToDoList from './List.js';

export default class CompleteTask {
  constructor() {
    this.toDoList = new ToDoList();
  }

  changeState(index) {
    this.toDoList.list[index - 1].completed = !this.toDoList.list[index - 1].completed;
    localStorage.setItem('data', JSON.stringify(this.toDoList.list));
  }
}