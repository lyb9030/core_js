/* -------------------- */
/* DOM Styling          */
/* -------------------- */

const nav = getNode('nav');

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// console.log( nav.className ); // getter

// nav.className = 'navigation' // setter

// console.log( nav.classList );

// nav.classList.add('hello'); // hello class 추가

// nav.classList.remove('hello'); // hello class 제거

// console.log(nav.classList.contains('navigation')); // navigation class 유무 확인하기
// nav.classList.toggle('is-active');

// add로 변경 하는 방법

// addClass(nav,'a')
// addClass(nav,['a','b','c'])
// addClass(nav,'a,b,c,d')
// addClass(nav,{first:'a',second:'b'}) // 값만 클래스로 들어갈 수 있게

/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

// nav.style.background = 'dodgerblue';

// nav.style.cssText = `
// color:white;
// padding:1rem;
// background:black;
// `;

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// console.log(getComputedStyle(nav).backgroundColor);

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

// getCss() // getter

/* global syntaxError */

// function getCss(node, prop) {
//   if (isString(node)) node = getNode(node);
//   if ((!prop) in document.body.style)
//     throw new SyntaxError(
//       'getCss 함수의 두 번째 인수는 유효한 css 속성 이어야 합니다.'
//     );
//   return getComputedStyle(node)[prop];
// }

// getCss('.about', 'font-size');

// // setCss() // setter

// function setCss(node, prop, value) {
//   if (isString(node)) node = getNode(node);
//   if (!(prop in document.body.style))
//     throw syntaxError(
//       'setCss 함수의 두 번째 인수는 유효한 css 속성 이어야 합니다.'
//     );
//   if (!value)
//     throw syntaxError('setCss 함수의 세 번째 인수는 필수 입력값 입니다.');
//   node.style[prop] = value;
// }

// // css()

// const css = (node, prop, value) =>
//   !value ? getCss(node, prop) : setCss(node, prop, value);
