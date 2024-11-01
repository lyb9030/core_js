/* ------------------- /
/ Logical Operators   /
/ ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log(AandB);
// -> 결과값 : ' '

// Logical AND assignment
// a && = b

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);
// -> 결과값 : 10

// Logical OR assignment
// a || = b

// 부정 연산자
let reverseValue = value;
console.log(!reverseValue);
// -> 결과값 : ture

console.log(!!reverseValue);
// -> 결과값 : false

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };
// -> 결과값 : {thisisFalsy : false} --> true : 탈락 / ' ' : ture값 탈락 / [] : ture값 탈락 / {객체} : true값 탈락 -> 전부 ture면 &&는 마지막 값을 도출

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };
// -> 결과값 : 2 --> false : 탈락 / '' : 빈문자 탈락 / 연산자의 갯수 2로 노출됨 : 정답 / 도출된 정답이 나와 마지막 논제는 진행하지 않음

console.clear();

// 로그인 구현하기

// 1. 당신은 누구십니까?
// 1-1. 취소 버튼 -> 취소되었습니다.
// 1-2. 다른 대답 -> 당신은 누군지 알 수 없습니다
// 1-3. admin -> 원하는 대답, 2번으로 진행

// 2. 암호는 무엇입니까?
// 2-1. 취소 버튼 -> 취소되었습니다.
// 2-2. 다른 암호 -> 인증에 실패하였습니다.
// 2-3. TheMaster -> 환영합니다!

// let userName = prompt('당신은 누구십니까?', '');

// if (userName == 'Admin') {
//   let pass = prompt('비밀번호:', '');

//   if (pass == 'TheMaster') {
//     alert('환영합니다!');
//   } else if (pass == '' || pass == null) {
//     alert('취소되었습니다.');
//   } else {
//     alert('인증에 실패하였습니다.');
//   }
// } else if (userName == '' || userName == null) {
//   alert('취소되었습니다.');
// } else {
//   alert('인증되지 않은 사용자입니다.');
// }

function login() {
  let userName = prompt('누구십니까?');

  // if(userName === null || userName === undefined) return
  // if(!userName) return

  if (userName.toLowerCase() === 'admin') {
    let password = prompt('비밀번호를 입력해주세요');

    if (password.toUpperCase() === 'MASTER') {
      console.log('로그인 성공');
    } else if (password === null) {
      console.log('취소됐습니다.');
    } else {
      console.log('잘못된 정보를 입력하셨습니다.');
      login();
    }
  } else if (userName === null || userName.replace(/\s*/g, '') === '') {
    console.log('취소됐습니다.');
  } else {
    console.log('제대로된 값을 입력해주세요');
  }
}

login();
