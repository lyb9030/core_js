// 문제 1. 다음 코드 실행 시 콘솔에 출력되는 올바른 값은?

// {
//   var userName = 'tiger';
//   let phoneNumber = 123;
// }

// console.log(userName);
// console.log(phoneNumber);

// 1) tiger, 123
// 2) userName is not defined, phoneNumber is not defined
// 3) tiger, phoneNumber is not defined ★
// 4) userName is not defined, 123
// 5) 공란

// 정답 : tiger, phoneNumber is not defined
// -> var 는 {}를 넘어 갈 수 있으나, let은 {}는 넘어가지 못함

// 문제 2. 다음 코드 실행시 콘솔창에 출력된 결과는?

// console.log(value);
// var value = 10;

// 1) 10
// 2) value is not defined
// 3) Cannot access 'value' before initialzation
// 4) undefined ★
// 5) 공란

// 정답 :undefined
// -> 호이스팅에 관한 문제, var는 선언부만 끌어 올려지나, undifined로 설정이됨

// 문제 3. 다음 코드 실행 시 for 문 밖에 있는 콘솔 i의 출력값은?

// var i = 'tiger';

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log('outer : ' + i);

// 1) outer : 10 ★
// 2) outer : tiger
// 3) i is already defined
// 4) outer : tiger10
// 5) 공란

// 정답 : outer : 10
// -> for문에 대한 설명, var i = 0 이 우선실행 순위가 됨

// 문제 4. 다음 코드 실행 시 콘솔에 출력되는 올바른 값은?

// let condition = Boolean('1');

// if (condition) {
//   const i = 0;
// }

// console.log(i);

// 1) undefined ★
// 2) 0
// 3) null
// 4) i is not defined
// 5) 공란

// 정답 : i is not dfined
// -> 문자 1을 boolean으로 바꾸면 ture 가 되고 해당 조건이 참이라 실행이 됨.

// 문제 5. 다음 코드에 대한 설명으로 잘못된것을 고르세요.

// let nickName = 'tiger';
// console.log(nickName);

// if (nickName) {
//   let nickName = 'yamoo'; // -> 7번줄
//   console.log(nickName); // -> 8번줄
// }

// console.log(nickName); // -> 11번줄

// 1) 7번 줄에서 같은 이름의 변수를 재정의 했지만 에러가 발생하지 않는다.
// 2) 8번 줄에서 yamoo가 출력된다.
// 3) 11번 줄에서 tiger가 출력된다.
// 4) 조건문 자체가 거짓이므로 코드 자체가 실행되지 않는다. ★
// 5) 공란

// 정답 : 조건문 자체가 거짓이므로 코드 자체가 실행되지 않는다.
// -> 안에 문자가 있어 조건문 자체가 거짓일 수 없다.

// 문제 6. 다음 코드에 대한 설명으로 알맞은 것은?

// const user = {
//   nickName: 'tiger',
//   age: 28,
// };

// user.age = 30;

// 1) const로 정의했기 때문에 8번 줄에서 에러가 발생한다.
// 2) 에러 없이 age 속성에 30의 값이 할당된다.
// 3) 에러는 발생하지 않지만 age는 기존 값인 28을 유지한다. ★
// 4) age는 기존값과 새로운 값을 더한 2830의 값이 할당된다.
// 5) 공란

// 정답 : 에러 없이 age 속성에 30의 값이 할당된다.
// -> ???

// 문제 7.다음 코드 실행시 콘솔창에 출력될 값은?

// let a = ' ';
// let b = false;

// a ||= b;

// console.log(a);

// 1) undefined
// 2) null
// 3) ' ' ★
// 4) false
// 5) 공란

// 정답 : ' ' (공백문자)
// -> a = 공백문자, b = 거짓 --> a는 ture이기에 a값이 나온다.

// 문제 8.다음 코드에 대한 설명으로 알맞은 것은?

// if (' ' && true) {
//   console.log('This is Truthy!'); // -> 6번 줄
//
//   if (0 || null) {
//     console.log('This is Falsy!'); // -> 9번 줄
//   }
// }

// 1) 6번, 9번 모두 출력된다.
// 2) 6번만 출력된다.
// 3) 9번만 출력된다.
// 4) 둘 다 출력되지 않는다. ★
// 5) 공란

// 정답 : 6번만 출력된다.
// -> 첫번째 if는 ture / ture라서 실행 됨, 두번째 if 는 false /false 라서 실행이 안됨

// 문제 9. 다음 코드 설명 중 옳은 것을 고르세요.

// let value1 = func1(4, 10);
// let value2 = func2(3, 7);

// function func1(a, b) {
//   return a - b;
// }

// const func2 = function (a, b) {
//   return a * b;
// };

// 1) value1은 -6의 값이 할당된다.
// 2) value2는 21의 값이 할당된다.
// 3) 두 함수 모두 실행되지 않는다.
// 4) func2는 syntaxError가 발생한다. ★
// 5) 공란

// 정답 : value1은 -6의 값이 할당된다.
// -> 함수 선언문은 함수자체가 올라가나, 함수 표현식은 앞 부분만 올라가기에, value2는 실행이 안됨

// // 문제 10. 다음 코드 설명 중 옳은 것을 고르세요.

// let b = 10;

// const func1 = (a) => a + b;
// const func2 = (a) => (a + b);
// const func3 = (a) => {
//   a + b;
// };
// const func4 = (a) => ({ result: a + b });

// 1) func1 함수와 func2 함수의 매개변수 값이 동일하다면 두개의 함수는 같은 값을 내보낸다.
// 2) func2 함수는 syntaxError가 발생한다.
// 3) func3 함수의 a의 값이 5일 경우 25의 값을 리턴한다.
// 4) func4 함수는 return 키워드가 빠졌으므로 undefined를 반환한다.
// 5) 공란 ★

// 정답 : func1 함수와 func2 함수의 매개변수 값이 동일하다면 두개의 함수는 같은 값을 내보낸다.
// -> 2번은 값이 돌출이 됨, 3번은 중괄호로 묶여있어 값이 나오지 않음.
