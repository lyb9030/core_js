import { getNode, setStorage, getStorage, deleteStorage } from './lib/index.js';

// 1. 인풋 이벤트 바인딩
// - 인풋 (textarea) 태그 선택
// - addEventListener ('input' , handler)
// - handler 함수 안에서 값 가져오기 (this.value)

// 2. 인풋 값을 로컬 스토리지에 저장 (타이핑 하는 순간 순간마다)
// - setStorage(key,value)

// 3. init 함수 안에서 로컬 스토리지에 있는 값을 가져와 인풋의 value로 설정

// 4. 새로고침 -> 데이터 유지

// text 필드에 입력하여 저장하기
const textField = getNode('#textField');

function handleInput() {
  const value = this.value;

  setStorage('text', value);
}

textField.addEventListener('input', handleInput);

// 지워줘도 데이터는 유지 시키기 (초기화 함수)
function init() {
  console.log('초기화');

  getStorage('text').then((res) => (textField.value = res));
}

// 클리어를 누르면 박스 안 공간을 비워주기
const clearButton = getNode('button[data-name="clear"]');

function handleClear() {
  textField.value = '';
  deleteStorage('text');
}

textField.addEventListener('input', handleInput);
clearButton.addEventListener('click', handleClear);

init();
