const user = {
  id: 'asd@naver.com',
  pw: 'spdlqj123!@',
};

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

const emailInput = document.querySelector('#userEmail');
const pwInput = document.querySelector('#userPassword');
const loginButton = document.querySelector('.btn-login');

let emailPass = false;
let pwPass = false;

// 로그인 버튼을 누르면 email, pw를 체크하고 그게 맞다면 다음 페이지로 넘기는게 우선
// email input 잡기
// 이벤트 연결하기

// 로그인 버튼을 잡아야 한다.
// 로그인 버튼에 이벤트를 연결한다.

function handleCheckEmail() {
  const value = this.value;

  if (emailReg(value)) {
    // 제대로 된 이메일 주소 작성
    this.classList.remove('is--invalid');
    emailPass = true;
  } else {
    // 잘못된 이메일 주소 작성
    this.classList.add('is--invalid');
    emailPass = false;
  }
}

function handleCheckpw() {
  const value = this.value;

  if (pwlReg(value)) {
    // 제대로 된 이메일 주소 작성
    this.classList.remove('is--invalid');
    pwPass = true;
  } else {
    // 잘못된 이메일 주소 작성
    this.classList.add('is--invalid');
    pwPass = false;
  }
}

function handleLogin(e) {
  e.preventDefalut();

  if (emailPass && pwPass) {
    try {
      const id = emailInput.value;
      const pw = pwInput.value;

      user.getUserid = user.id; // 1s
      user.getUserpw = user.pw; // 1s

      if (id === getUserid && pw === getuserpw) {
        console.log('로그인 성공!');
      } else {
        throw error;
      }
    } catch {
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
  }
}

emailInput.addEventListener('input', handleCheckEmail);
pwInput.addEventListener('input', handleCheckpw);
loginButton.addEventListener('click', handleLogin);
