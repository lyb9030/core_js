/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

function handler() {
  console.log('안뇽?');
}

// 2. DOM 프로퍼티 : element.onclick = handler

const about = getNode('.about');
const home = getNode('.home');
// about.onclick = handler

// 3. 메서드 : element.addEventListener(event, handler[, phase])
// addEventListener 는 이벤트를 여러개 연결 할 수 있는 장점이 있다.

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// 신규 이벤트 추가 (클릭시 handler의 함수가 작용)
// about.addEventListener('click', handler);

// // - removeEventListener
// //  Home 버튼을 누르면 '안뇽?'이 더이상 나오지 않는다.
// home.addEventListener('click', () => {
//   about.removeEventListener('click', handler);
// });

// home.addEventListener('click', handlerHomeClick);

/* -------------------------------------------- */

// 축구장안에서 축구공 움직이기 만들어보기

const ground = getNode('.ground');
const ball = getNode('.ball');

function handleBall({ offsetX: x, offsetY: y }) {
  // const { offsetX:x, offsetY:y } = e;

  // const x = e.offsetX
  // const y = e.offsetY

  const w = ball.offsetWidth;
  const h = ball.offsetHeight;

  ball.style.transform = `translate(${x - w / 2}px,${y - h / 2}px)`;
}

ground.addEventListener('click', handleBall);

/* -------------------------------------------- */

// 축구공이 마우스를 따라 가는 것
// function handlerMove({ offsetX: x, offsetY: y }) {
//   const w = ball.offsetWidth;
//   const h = ball.offsetHeight;

//   ball.style.transform = `translate(${x - w / 2}px,${y - h / 2}px) `;
// }

/* -------------------------------------------- */

// ground.addEventListener('mousemove', handlerMove);

// 마우스의 잔상이 남게 만드는 것

function handleMove({ offsetX: x, offsetY: y }) {
  // const w = ball.offsetWidth;
  // const h = ball.offsetHeight;
  // ball.style.transform = `translate(${x - (w / 2)}px,${y - (h / 2)}px)`

  const template = `
    <div class="emotion" style="top:${y}px; left:${x}px">🥰</div>
  `;
  insertLast(ground, template);
}

// debounce

window.addEventListener('resize', () => {
  console.log('값 계산중...'); // 1s
});

function debounce(callback, limit = 500) {
  let timeout;

  return function (e) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback.call(this, e);
    }, limit);
  };
}

function handle(e) {
  console.log(e);
}

ground.addEventListener('mousemove', throttle(handle, 1000));

// 타이머 등록
function throttle(callback, limit = 500) {
  let wait = false;

  return function (...args) {
    if (!wait) {
      callback.apply(this, args);
      wait = true;
      setTimeout(() => (wait = false), limit);
    }
  };
}

// 디바운서가 3회 호출이 되면, 타이머가 지워지고 다시 설치가 됨
// debounce(() => {
//   console.log('hello000');
// }, 1000); // -> 취소가 됨
// debounce(() => {
//   console.log('hello000');
// }, 1000); // -> 취소가 됨
// debounce(() => {
//   console.log('hello000');
// }, 1000); // -> 해당 debounce만 나옴

//throttle
