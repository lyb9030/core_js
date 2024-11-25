/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

import data from './data.js';
import { getNode, removeClass } from '../../client/lib/index.js';

const nav = getNode('.nav');
// const list = nav.lastElementchild.children; - 코드를 배열로 아래에 변경
const list = [...nav.lastElementchild.children];

// 텍스트 바꾸기
function setName(data) {
  title.textContent = data.name;
}

function handle(e) {
  const target = e.target.closet('li');

  if (!target) return; // 타겟이 없으면 리턴으로 내보내주세요

  // 텍스트 바꾸기
  const index = target.dataset.index - 1;
  const source = data[index]; // 소스의 네임을 가져오기

  title.textContent = data[index].name;

  list.forEach((li) => removeClass(li, 'is-active')); // li의 is-active를 제거해줌

  // target.classList.add('is-active'); - 아래 코드와 동일
  addClass(target, 'is-active');
}

nav.addEventListener('click', handle);
