const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header');

const h = (t) => {
  t.style.height = 0;
};

// console.log(header.offsetHeight);

// header의 높이를 가져와서 depth의 top값으로 설정
// elem.offsetHeight
// elem.style.top

// depth top값 설정 코드

function vanilla() {
  depthList.forEach((d) => (d.style.top = header.offsetHeight + 'px'));

  aList.forEach((a) => {
    // event binding => 'mouseenter' event => this 출력하기

    // 1. '현재 선택'된 a태그 안에 있는 depth
    // currentTaget + lastElementChild

    a.addEventListener('mouseenter', (e) => {
      const currentDepth = e.currentTarget.lastElementChild;

      // 3. 나머지 depth 높이 제거하기 (0px)
      // 모든 depth를 가져오기 => style 제거
      // depthList.forEach((d) => (d.style.heght = 0));
      // const h = (d) => (d.style.height = 0); 조건식을 입력하면,
      depthList.forEach(h); // 로 간단하게 입력이 가능

      // 2. depth에게 높이 추가 (100px)
      // node.style.height = ???
      currentDepth.style.height = '100px';
    });
  });

  header.addEventListener('mouseleave', () => {
    depthList.forEach(h);
  });
}

/* global gsap */

gsap.set(depthList, { top: header.offsetHeight });

aList.forEach((a) => {
  const currentDepth = a.lastElementChild;

  const tl = gsap
    .timeline({ paused: true })
    .to(currentDepth, { height: 100, ease: 'power2.inOut' });

  a.addEventListener('mouseenter', () => tl.play());
  a.addEventListener('mouseleave', () => tl.reverse());
});

// mouseleave => 원래대로
