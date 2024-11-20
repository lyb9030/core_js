import data from './data/data.js';
import {
  shake,
  copy,
  addClass,
  showAlert,
  getRandom,
  insertLast,
  removeClass,
  getNode as $,
  clearContents,
  isNumericString,
} from './lib/index.js';

// [phase-1]

// 1. 주접 떨기 버튼 클릭 하는 함수
//    - 주접 떨기 버튼 가져오기
//    - 이벤트 연결

// 2. input 값 가져오기
//    - 콘솔이 출력

// 3. data 함수에서 주접 1개 꺼내기
//    - n번째, random 주접을 꺼내기
//    - Math.random()

// 4. result에 랜더링하기
//    - insertLast()

// [phase-2]
// 5. 예외 처리
//    - 이름이 없을 경우 콘솔에 에러 출력 > result에 결과값이 나오면 안됨
//    - 숫자만 들어오면 콘솔에 에러 출력

const submit = $('#submit');
const nameField = $('#nameField');
const result = $('.result');

// function handleSubmit(e) {
//   e.preventDefault(); // 기본 동작은 차단

//   const name = nameField.value;
//   const list = data(name); // data의 리스트를 가져오기
//   const pick = list[getRandom(list.length)];
//   // 랜덤한 값을 돌출 (* 10을 해줘서 정수값이 나오게 하고 floor을 해서 버림으로 정리)

//   // 만약에 name 값이 '' 라면...
//   if (!name || name.replacAll(' ', '') === '') {
//     console.log('??');

//     // console.error('제대로된 이름을 입력해 주세요.') // 콘솔창에 에러 메세지 생성

//     addClass('.alert-error', 'is-active'); // 에러 메세지 노출

//     $('.alert-error').textContent = '제대로된 이름을 입력해 주세요'; // 에러메시지 노출되는 문구 변경

//     setTimeout(() => {
//       removeClass('.alert-error', 'is-active'); // 에러 메세지 제거
//     }, 1000);
//     // 1초 후에 에러메세지 삭제

//     return;
//   }

//   clearContents(result); // 기존의 문구를 삭제해주는 코드
//   insertLast(result, pick);
// }

// showalert 사용 코드

function handleSubmit(e) {
  e.preventDefault(); // 기본 동작은 차단

  const name = nameField.value;
  const list = data(name); // data의 리스트를 가져오기
  const pick = list[getRandom(list.length)];
  // 랜덤한 값을 돌출 (* 10을 해줘서 정수값이 나오게 하고 floor을 해서 버림으로 정리)

  // 만약에 name 값이 '' 라면...
  if (!name || name.replaceAll(' ', '') === '') {
    // console.error('제대로된 이름을 입력해 주세요.') // 콘솔창에 에러 메세지 생성

    showAlert('.alert-error', '공백은 허용하지 않습니다.', 1200);
    shake(nameField);
    return;
  }

  if (!isNumericString(name)) {
    showAlert('.alert-error', '정확한 이름을 입력해 주세요', 1200);
    shake(nameField);
    return;
  }

  // if(...)

  console.log(isNaN(Number(name))); // 숫자형 문자인지 아닌지 확인이 가능9984

  clearContents(result); // 기존의 문구를 삭제해주는 코드
  insertLast(result, pick);
}

// 클립보드 복사 방법
function handleCopy() {
  const text = this.textContent;

  copy(text).then(() => {
    showAlert('.alert-success', '클립보드 복사 완료!'); // 클립보드 복사 문구 노출
  });
}

submit.addEventListener('click', handleSubmit);
result.addEventListener('click', handleCopy);
