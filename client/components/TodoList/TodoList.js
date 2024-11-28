import { TodoItem } from '../TodoItem/TodoItem.js';

const todoTemplate = document.createElement('template');

todoTemplate.innerHTML = `
<style>@import url('./components/TodoList/TodoList.css');</style>
<div class="container">
    <h1>TO DO LIST <img src="/client/assets/checklist.png" alt="체크리스트" /></h1>
    <ul class="todo"></ul>
    <button type="button" class="add-item"> + </button>
  </div>
`;

export class TodoList extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.render();

    // 컨테이너 잡아주기
    this.container = this.shadowRoot.querySelector('.container');
    // todo 잡아주기
    this.todo = this.container.querySelector('.todo');
    // 버튼 잡아주기
    this.addButton = this.container.querySelector('.add-item');
  }

  // 이벤트 바인딩 하기
  connectedCallback() {
    const tl = gsap.timeline();

    tl.from(this.container.children[0], { opacity: 0, y: 30 });
    tl.from(this.container.children[1], { opacity: 0, height: 0, clearProps: 'all' });
    tl.from(this.container.children[2], { opacity: 0, marginTop: 40 });

    this.addButton.addEventListener('click', () => this.handleAddClick());

    const data = JSON.parse(localStorage.getItem('todo'));

    data.forEach(({ id, value, checked }) => {
      const todoItem = new TodoItem(id, value, checked);
      this.todo.append(todoItem);
    });
  }

  // 클릭시 이벤트 발생
  handleAddClick() {
    // const tag = document.createElement('custom-todo-item');
    // 아래로 변경 가능 (생성자 함수라 new로 호출 가능, 다만 TodoItem을 import로 받아야 함)
    const todoItem = new TodoItem(Date.now(), '', false);
    // tag.textContent = 'list';

    this.todo.append(todoItem);
  }

  // 랜더링 (화면에 노출) 하기
  render() {
    this.shadowRoot.append(todoTemplate.content.cloneNode(true));
  }
}
