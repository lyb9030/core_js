const { localStorage: storage } = window; // localstorage 이름을 storage로 바꾸기

// storage.setItem('user', 'tiger'); // user의 이름을 tiger로 객체 전달하기
// storage.setItem('user', JSON.stringift({ name: 'tiger', age: 40 })); // 객체로 전환하기

// set 스토리지
export function setStorage(key, value) {
  return new Promise((resolve, reject) => {
    if (typeof key === 'string') {
      storage.setItem(key, JSON.stringify(value));
      resolve();
    } else {
      reject({ message: 'setStorage함수의 첫 번째 인수는 문자 타입 이어야 합니다.' });
    }
  });
}

// storage.setItem('user',JSON.stringify({name:'tiger',age:40}));

// setStorage('user',{name:'tiger',age:40})
// .then(()=>{
//   console.log('저장 완료!');
// })

// get 스토리지
const value = storage.getItem('user');

console.log(JSON.parse(value));

export function getStorage(key) {
  return new Promise((resolve, reject) => {
    if (typeof key === 'string') {
      resolve(JSON.parse(storage.getItem(key)));
    } else {
      reject();
    }
  });
}

getStorage('user').then((res) => {
  res.name;
});

// delet 스토리지 (안에 들어가면 대상만 지우고, 공란이면 clear [전체삭제])
// delet는 실패가 없음 - reject 값이 없음
export function deleteStorage(key) {
  return new Promise((resolve, reject) => {
    !key ? storage.clear() : storage.removeItem(key);
    resolve();
  });
}

// set 쿠키
export function setCookieValue(name, value, days, path = '/') {
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)};path=${path}`;

  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // days를 밀리세컨즈
    cookieString += `; expires=${date.toUTCString()}`;
  }

  document.cookie = cookieString;
}

setCookieValue('username', 'tiger', 1);

// get 쿠키

export function getCookieValue(name) {
  const value = `; ${document.cookie}`;

  const parts = value.split(`; ${encodeURIComponent(name)}=`);

  console.log(parts);

  if (parts.length === 2) {
    return decodeURIComponent(parts.pop().split(';').shift());
  }
  return null;
}
