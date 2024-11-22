import {
  tiger,
  delayP,
  getNode,
  insertLast,
  changeColor,
  renderSpinner,
  renderUserCard,
  renderEmptyCard,
} from './lib/index.js';

const END_POINT = 'https://jsonplaceholder.typicode.com/users';
const userCardInner = getNode('.user-card-inner');
renderSpinner(userCardInner);

async function renderUserList() {
  try {
    const response = await tiger.get(END_POINT);

    // getNode('.loadingSpinner').remove()

    // 로딩 창 만들어주는 코드
    gsap.to('.loadingSpinner', {
      opacity: 0,
      // gsap 제공하는 코드 종료하는 법
      onComplete() {
        this._targets[0].remove();
      },
    });

    const data = response.data;

    // 코드 자체를 1초 미루는 코드
    await delayP(1000);

    data.forEach((user) => {
      renderUserCard(userCardInner, user);
    });

    // 카드 색상 바꿔주는 코드
    changeColor('.user-card');

    // 카드 이미지가 나오는 애니메이션 코드
    gsap.from('.user-card', {
      x: -100,
      opacity: 0,
      stagger: {
        amount: 1,
        from: 'start',
      },
    });
  } catch {
    renderEmptyCard(userCardInner);
  }
}

renderUserList();

// 1. user 데이터 fetch 해주세요.

// 2. fetch 데이터 유저의 이름만 콘솔에 출력

// 카드 삭제하는 코드
function handleDeleteCard(e) {
  const button = e.target.closest('button');

  if (!button) return;

  const article = button.parentElement;
  const index = article.dataset.index.slice(5);

  tiger.delete(`${END_POINT}/${index}`).then(() => {
    alert('삭제가 완료됐습니다.');
  });
}

userCardInner.addEventListener('click', handleDeleteCard);
