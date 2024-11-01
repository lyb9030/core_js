/* -------------------------------------------- */
/*                  Legacy var                  */
/* -------------------------------------------- */

// var로 선언한 변수의 스코프는 함수 스코프이거나 전역 스코프입니다.
// 블록 기준으로 스코프가 생기지 않기 때문에 블록 밖에서 접근 가능합니다.

let outside = 'outer';
{
  console.log(outside);
}

// function a() {
//   var outside = 'outer';
// }

// console.log * outside;

// var는 변수의 중복 선언을 허용합니다

// var b = 10;
// var b = 30;

// console.log(b);
// --> var는 중복 변수가 선언이 되서 30으로 결과가 나옴

let b = 10;

{
  let b = 30;
}

console.log(b);
// --> let은 b가 10으로 노출이 됨, 중괄호 안에서 console을 호출하면 30으로 나옴

// 선언하기 전 사용할 수 있는 var

console.log(c);

var c = 123456;
// --> 순서가 바껴도 var은 선언이 가능하다.
