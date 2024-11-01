/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number

const YEAR = 2024;
console.log(String(YEAR));
// -> 결과 값 2024

console.log(YEAR + '');
// -> 결과 값 2024

// undefined, null

let days = null;
console.log(days + '');
// -> 결과 값 null

let undef = undefined;
console.log(undef + '');
// -> 결과 값 undefined

// boolean

let isClicked = true;
console.log(String(isClicked));
// -> 결과 값 Ture

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined => NaN

let friend;
console.log(Number(friend));
// -> 결과 값 NaN

// null = > 0

let money = null;
console.log(money / 1);
// -> 결과 값 0

// boolean

let isActive = false;
console.log(isActive * 1);
// -> 결과 값 0

// string

let num = '100';
console.log(Number(num));
console.log(+num);
console.log(num / 1);
console.log(num * 1);
// -> 결과 값 숫자 100

// numeric string

const width = '120.5px';
console.log(parseInt(width));
// -> 결과 값 숫자 120 ==> 0.5 절삭, 정수값만 나타냄
console.log(parseFloat(width));
// -> 결과 값 숫자 120.5

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

console.log(Boolean(friend));
// -> 결과 값 false
console.log(Boolean(null));
// -> 결과 값 false
console.log(Boolean(0));
// -> 결과 값 false
console.log(Boolean(''));
// -> 결과 값 false
console.log(Boolean(NaN));
// -> 결과 값 false
console.log(Boolean(' '));
// -> 결과 값 ture
console.log(Boolean('0'));
// -> 결과 값 ture
console.log(!!'0');
// -> 결과 값 ture
console.log(!!{});
// -> 결과 값 ture
console.log(!![false]);
// -> 결과 값 ture
console.log(Boolean(() => {}));
// -> 결과 값 ture
