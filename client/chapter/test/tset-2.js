// 문제 1. 다음 코드를 실행한 결과 올바른 항목을 고르세요.

// const objA = {
//   name: 'tiger',
//   age: 15,
//   address: {
//     zipcode: '29374-19283',
//     geo: {
//       lat: '-37.3159',
//       lng: '81.1496',
//     },
//   },
// };

// const objB = { ...objA, adress: { objA, adress } };

// 1) objB는 참조에 의한 복사가 이루어졌다.
// 2) obB의 address는 얕은 복사가 이루어졌다.
// 3) objB의 lat값을 변경하면 objA의 값은 변경되지 않는다.
// 4) objB의 zipcode값을 변경하면 objA의 값도 변경된다. ★
// 5) 선택지 공란

// 정답 : obB의 address는 얕은 복사가 이루어졌다.

// 문제 2. 다음 코드를 실행한 결과 올바른 항목을 고르시오.

// const user = {
//   total: 0,
//   incre: (it) => {
//     this.total += it;
//   },
// };

// user.incre(5); // 12번째줄
// console.log(user.total); // 13번째줄
// const total = user.incre; // 14번째줄

// 1) 12번째줄의 반환값은 5이다.
// 2) 13번째줄의 콘솔 출력 값은 5이다.
// 3) incre함수 안의 this는 window 이다.
// 4) 14번째줄의 total변수 안의 담긴 값은 undifined이다. ★
// 5) 선택지 공란

// 정답 : incre함수 안의 this는 window 이다.
// -> 12번째의 반환값은 0이며, total의 값 역시 0 이다,
// -> 14번째의 값은 함수가 실행되지 않아 함수의 본문 값이 나오게 된다.

// 문제 3. 다음 설명중 옳은 것을 고르세요.

// function outer() {
//   let value = 0;
//   function a() {
//     value++;
//   }

//   function b() {
//     value++;
//   }
//   return { a, b };
// }

// const obj = outer();
// obj.a();
// obj.b();
// obj.a = null;

// 1) 함수a와 함수b의 lexical environment는 같은 부모의 lexical environment를 체인으로 연결한다.
// 2) b함수의 lexical enviornment는 함수 실행 종료 후에 바로 제거된다.
// 3) a함수의 메모리주소는 제거되지만 lexical environment는 여전히 살아있다. ★
// 4) outer함수가 객체를 리턴하였기 때문에 클로저라 볼 수 없다.
// 5) 선택지 공란

// 정답 : 함수a와 함수b의 lexical environment는 같은 부모의 lexical environment를 체인으로 연결한다.
// -> 2. 실행의 종료 후 환경을 기억하기에 제거되지 않는다.
// -> 3. a함수가 사라져 메모리는 없어졌다고 보는게 맞자.
// -> 4. outer는 클로저가 맞다.

// 문제 4. 다음 설명 중 잘못된 것을 고르세요.

// function outer() {
//   let value = 0;
//   return function () {
//     value++;
//     return function () {
//       value++;
//     };
//   };
// }

// const f1 = outer();
// const f2 = f1();
// f2();

// 1) outer 호출 시 생성된 lexical environment는 outer 종료 후에도 제거되지 않는다.
// 2) f1 호출 시 생성된 lexical environment는 f1 종료 후에도 제거되지 않는다.
// 3) f2 호출 시 생성된 lexical environment는 f2 종료 후에도 제거되지 않는다.
// 4) f2 호출 후에 value의 값은 1이 된다. ★
// 5) 선택지 공란

// 정답 : f2 호출 후에 value의 값은 1이 된다.
// -> f2의 호출 값은 2가 된다.

// 문제 5. 다음 설명 중 틀린 것을 고리세요.

// 각 줄의 숫자 코드는 Line Number 입니다.

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(`hello ~ ${this.name}!`);
//   }

//   class Student extends User {
//     constructor (name, language) {
//       super(name) // 15번 줄
//       this.language = language
//     }
//   }

//   cosnt 선범 = new Student ('sanchaz', 'math')
//   cosnt nickName = 선범.name;
//   선범.sayHi()
// }

// 1) 자식 클래스의 constructor에서 super를 호출하면 부모 클래스의 constructor가 호출된다.
// 2) 15번 줄에서 super를 호출하는 코드는 생략해서 쓸 수 있다. ★
// 3) nickName의 값은 'Sanchaz'이다.
// 4) 선범은 부모 클래스로부터 상속 받은 sayHi 메서드를 호출할 수 있다.
// 5) 선택지 공란

// 정답 : 15번 줄에서 super를 호출하는 코드는 생략해서 쓸 수 있다.
// => student가 받는 값이 없으면 super를 생략 할 수 있으나, 받는값이 있어서 불가능 하다.

// 주관식 문제 6. 다음 코드 실행시 콘솔에 출력될 값은?

// const arr = [30, undefined, 15, 108];
// const [x, y = 10, ...rest] = arr;
// const value = y + rest[0];

// console.log(value);

// 정답 : 25
// -> y = 10 , rest[0] = 15 => 25

// 주관식 문제 7. 다음 코드 실행시 콘솔에 출력될 값은?

// const obj = { a: 1, b: 2, c: 3 };
// const { b, ...rest } = obj;
// const value = Object.values(rest).reduce((acc, item) => acc + item, 0);

// console.log(value);

// 정답 : 4
// => b = 2, rest[0] = 1,3

// 문제 8. 다음 설명중 맞는 것을 고르시오.

// 문제 풀이를 위한 이미지는 라운지에 올려두었으니 참고 부탁드립니다!

// 1) 콘솔창에 hello는 정확히 1초의 타이머를 가지고 찍힌다.
// 2) 콜스택의 구조는 Last In First Out 구조이다. ★
// 3) EventLoop의 구조는 First In Last Out 구조이다.
// 4) 자바스크립트는 멀티스레드 환경이라 비동기 처리가 가능하다.
// 5) 선택지 공란

// 정답 : 콜스택의 구조는 Last In First Out 구조이다.
// 3. First In First Out의 구조 이다.
// 4. 자바스크랩트는 단일 스레드 이다.
