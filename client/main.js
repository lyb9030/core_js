import {
  memo,
  attr,
  getNode,
  getNodes,
  endScroll,
  insertLast,
  clearContents,
  diceAnimation,
} from './lib/index.js';

const [rollingButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');

// [주사위 굴리기 버튼을 누르면 주사위가 선택되기]
// 1. 주사위 굴리기 버튼을 선택하기
// 2. 클릭 이벤트 바인딩

// [주사위가 애니메이션이 될 수 있도록 만들어 주세요]
// 1. setInterval
// 2. diceAnimation()

// [같은 버튼 눌렀을 때 ]
// 1. 상태 변수 true | false
// 2. 조건 처리

// [애니메이션이 재생 or 정지]
// 1. setInterval
// 2. clearInterval ( scope )

// [기록 버튼을 누르면]
// 1. recordButton에 클릭 이벤트 바인딩

// [table이 등장]
// 1. recordListWrapper에 hidden 속성 제어하기 (true | false)

// [table 안쪽에 tr 태그 랜더링]
// 1. 태그 만들기
// 2. insertLast 함수 사용하기 (tbody 안쪽에 랜더링)

// [table 안쪽에 tr 태그에 데이터를 넣고 랜더링]

// [Item의 갯수가 많아짐에 따라 스크롤을 제일 하단으로 올 수 있도록]
// 1. scrollTop
// 2. scrollHeight

// [reset버튼을 눌렀을 때 모든 항목 초기화]
// hidden
// 변수 초기화

let count = 0;
let total = 0;

function createItem(value) {
  const template = `
    <tr>
      <td>${++count}</td>
      <td>${value}</td>
      <td>${(total += value)}</td>
    </tr>
  `;
  return template;
}

function renderRecordItem() {
  // const diceNumber = +attr(getNode('#cube'),'dice')
  const diceNumber = +memo('cube').getAttribute('dice');

  insertLast('tbody', createItem(diceNumber));
}

// 주사위가 굴러가는 코드
const handleRollingDice = (() => {
  let isClicked = false;
  let stopAnimation;

  return () => {
    if (!isClicked) {
      stopAnimation = setInterval(diceAnimation, 100); // // 주사위 굴리기를 눌렀을때 다이스가 1초마다 움직이는 애니메이션 작동
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }

    isClicked = !isClicked;
  };
})();

// 기록 버튼 작동
function handleRecord() {
  recordListWrapper.hidden = false; // 기록을 눌렀을때 레코드 리스트가 나오게 하는 것
  renderRecordItem();
  endScroll(recordListWrapper); // 스크롤바 맨 밑으로 내리기
}

function handleReset() {
  recordListWrapper.hidden = true; // 초기화 누르면 기록 창 안보이기
  clearContents('tbody'); // 기록 없애기
  count = 0;
  total = 0;
}

rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
