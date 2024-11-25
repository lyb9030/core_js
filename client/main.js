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

    renderUserList();
  });
}

userCardInner.addEventListener('click', handleDeleteCard);

// create 버튼 누르면 ID 입력 팝업창 나오게 하기
// 1. create 버튼을 선택한다.
// 2. 클릭 이벤트를 바인딩한다.
// 3. create에 open 클래스를 추가한다.

const createButton = getNode('.creat');
const doneButton = getNode('.done');

function handleCreate() {
  // this.classList.add('open'); // 아래 gsap과 같은 코드
  gsap.to('.pop', { autoAlpha: 1 });
}

createButton.addEventListener('click', handleCreate);

// 취소 누르면 화면이 꺼지게 하기
// 1. cancel 버튼을 선택한다.
// 2. 클릭 이벤트를 바인딩한다.
// 3. create에 open 클래스를 제거한다.

const cancelButton = getNode('.cencel');

function handleCencel(e) {
  e.stopPropagation();
  // createButton.classList.remove('open'); // 아래 gsap과 같은 코드
  gsap.to('.pop', { autoAlpha: 0 });
}

cencelButton.addEventListener('click', handleCencel);

// POST 통신을 해주세요.
// 1. input의 value를 가져온다.
// 2. value를 모아서 객체를 생성한다.
// 3. 생성 버튼을 누르면 POST통신을 한다.
// 4. body에 생성된 객체를 실어보낸다.
// 5. 카드 컨텐츠 비우기
// 6. 유저카드 리랜더링

function handleDone(e) {
  e.preventDefault();

  const username = getNode(' #nameField').value;
  const email = getNode(' #emialField').value;
  const website = getNode(' #siteField').value;

  console.log(name, email, website);

  const obj = {
    username,
    email,
    website,
  };

  tiger.post(END_POINT, { username, email, website }).then(() => {
    gsap.to('pop', { autoAlpha: 0 });
    clearContents(userCardInner);
    renderUserList();

    getNode('#nameField').value = '';
    getNode('#emialField').value = '';
    getNode('siteField').value = '';
  });
}

doneButton.addEventListener('click', handleDone);
