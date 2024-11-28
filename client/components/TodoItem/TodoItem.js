import { TodoService as s } from '../../service/TodoService/TodoService.js';

const todoItemTemplate = document.createElement('template');

todoItemTemplate.innerHTML = `
<style>@import url('./components/TodoItem/TodoItem.css');</style>
<li class="item">
    <input type="checkbox" />
    <div class="content">
      <input type="text" />
    </div>
    <button type="button" class="delete-item">x</button>
  </li>
`;

export class TodoItem extends HTMLElement {
  constructor(id, value, checked) {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();

    this.item = this.shadowRoot.querySelector('.item');
    this.checkbox = this.item.querySelector('input[type="checkbox"]');
    this.contentInput = this.item.querySelector('input[type="text"]');
    this.deleteButton = this.item.querySelector('.delete-item');

    this.id = id;
    this.contentInput.value = value;
    this.checkbox.checked = checked;

    // 만약 체크가 true이면 done을 추가
    if (checked) {
      this.contentInput.classList.add('done');
    }
  }

  // 삭제 이벤트
  connectedCallback() {
    // LIST 작성공간에 글씨 넣어주기
    this.contentInput.value = 'TASK' + this.id;

    this.deleteButton.addEventListener('click', () => this.handleDelete());
    this.checkbox.addEventListener('click', () => this.handleToggleChecked());
    this.contentInput.addEventListener('blur', () => this.handleUpdate());
    this.contentInput.addEventListener('keydown', (e) => this.handleEnterPress(e));

    s.AddTodoItem(this.id, this.contentInput.value, this.checkbox.checked);

    this.saveData();
  }

  // 엔터를 눌렀을때 다음으로 넘어가는 코드 keycode=13 => 엔터값(고정)
  handleEnterPress({ keyCode }) {
    if (keyCode === 13) {
      //

      if (this.nextElementSibling !== null) {
        const next = this.nextElementSibling.shadowRoot.querySelector('input[type="text"]');

        // this.contentInput.blur();
        // this.contentInput.blur() 코드는 줘도 되고 안줘도 됨, 사용에 무관
        next.focus();
      }
      // 마지막 열에서 엔터를 누르면 함수가 종료됨
      else {
        this.contentInput.blur();
      }
    }
  }

  // 정보를 저장시켜주는 코드
  handleUpdate() {
    s.UpdateTodoItem(this.id, this.contentInput.value);
    this.saveData();
  }

  handleDelete() {
    // gsap을 통해서 id 제거할 때 조금 더 이쁘게 제거하기
    gsap.to(this, {
      scale: 0,
      callbackScope: this,
      onComplete() {
        this.remove();
        // Todo아이템에서 id값을 찾은 후 id를 제거하기
        s.DeleteTodoItem(this.id);
        this.saveData();
      },
    });
  }

  handleToggleChecked() {
    if (this.checkbox.checked) {
      this.contentInput.classList.add('done');
    } else {
      this.contentInput.classList.remove('done');
    }

    s.CheckTodoItem(this.id, this.checkbox.checked);
    this.saveData();
  }

  saveData() {
    localStorage.setItem('todo', JSON.stringify(s.state));
  }

  render() {
    this.shadowRoot.append(todoItemTemplate.content.cloneNode(true));
  }
}
