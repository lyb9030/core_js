// ~초 후 에러메시지가 노출되게 하는 코드

import { addClass, removeClass } from './css.js';
import { getNode as $ } from './getNode.js';
import { isString } from '../utils/type.js';

export function showAlert(node, message = '오류가 발생했습니다.', timeout = 1000) {
  if (isString(node)) node = $(node);
  node.textContent = message; // 에러메시지 노출되는 문구 변경

  addClass(node, 'is-active'); // 에러 메세지 노출

  setTimeout(() => {
    removeClass(node, 'is-active'); // 에러 메세지 제거
  }, timeout);
  // 1초 후에 에러메세지 삭제
}
