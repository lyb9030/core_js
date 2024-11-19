// - "beforebegin" – elem 바로 앞에 html을 삽입
// - "afterbegin" – elem의 첫 번째 자식 요소 바로 앞에 html을 삽입
// - "beforeend" – elem의 마지막 자식 요소 바로 다음에 html을 삽입
// - "afterend" – elem 바로 다음에 html을 삽입

// 위 코드를 아래로 간략하게 변경

// before -> beforebegin
// first -> afterbegin
// last -> beforeend
// after -> afterend

function insertBefore(node, text) {
  if (isString(node)) node = getNode(node);
  node.insertAdjacentHTML('beforebegin', text);
}

function insertFirst(node, text) {
  if (isString(node)) node = getNode(node);
  node.insertAdjacentHTML('afterbegin', text);
}

function insertLast(node, text) {
  if (isString(node)) node = getNode(node);
  node.insertAdjacentHTML('beforeend', text);
}

function insertAfter(node, text) {
  if (isString(node)) node = getNode(node);
  node.insertAdjacentHTML('afterend', text);
}
