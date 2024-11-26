import { getNode, getStorage, setStorage, insertLast, clearContents } from '../lib/index.js';

// Todo List 만들기

// 1. submit 버튼 클릭시 input 값 가져오기
// 2. input값을 넣은 태그를 만들고 랜더링 ul.toDoList

// 3. 아이템 제거하기
// 4. 데이터 관리하기

const submitButton = getNode('.button');
const todoInput = getNode('#todo');
const todoList = getNode('.toDoList');

let todoListArray = [];

function createItem(id, value) {
  const tag = `
    <li data-id="${id}">${value}</li>
  `;
  return tag;
}

function renderItem({ target, id, value }) {
  insertLast(target, createItem(id, value));
}

// DOM에서 해당 id를 가지고 있는 li를 찾아서 remove를 실행
function removeItem(id) {
  const li = getNode(`[data-id="${id}"]`);
  li.remove();
}

function addItemArray(id, value) {
  todoListArray.push({ id, value });
  console.log(todoListArray);
}

function removeItemArray(id) {
  todoListArray = todoListArray.filter((item) => item.id !== id);
  console.log(todoListArray);
}

function handleSubmit(e) {
  e.preventDefault();

  const value = todoInput.value;
  const id = String(Date.now());
  // 아래 item 제거를 위한 Data.now를 문자로 나타냄
  // 제거를 위한 용도로 data-id를 넣어줌
  // 고유한 id 를 Data.now로 하는 이유는 시간에 따른 개별적 id를 부여하기 위함

  renderItem({ target: todoList, id, value });
  addItemArray(id, value);
  clearContents(todoInput);

  // 로컬에 저장하기
  setStorage('todo', todoListArray);
}

// 제거하기
function handleRemove(e) {
  const target = e.target;
  const id = target.dataset.id;
  // 배열의 메서드를 사용 => 배열을 반환하는 메서드
  // 데이터 타입을 고려해야 함 - item.id는 문자형 / id 는 숫자형이라 일치하지 않다고 나옴
  // filter : 필터는 새로운 배열을 반환한다. => 조건이 참인 경우만 반환, 찾는 대상 모두 반환
  // find  : 내가 찾은 데이터 그 자체를 반환한다. => 반환은 무조건 1개만 반환

  removeItem(id);
  removeItemArray(id);

  setStorage('todo', todoListArray);
}

// 이닛함수
function init() {
  const initList = getStorage('todo');

  initList.then((res) => {
    todoListArray ||= res;
    res?.forEach(({ id, value }) => {
      renderItem({ target: todoList, id, value });
    });
  });
}

submitButton.addEventListener('click', handleSubmit);
todoList.addEventListener('click', handleRemove);

init();
