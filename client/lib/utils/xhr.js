const END_POINT = 'https://jsonplaceholder.typicode.com/users';

// [readyState] -> 통신의 상태를 나타냄
// 0: uninitialized -> 아무 상태도 일어나지 않음
// 1: loading -> 데이터를 받는중인 상태
// 2. loaded -> 로딩이 완료된 상태
// 3. interactive -> 인터렉티브 상태
// 4. complete -> 완료된 상태
// 4번이 떳다고 데이터 통신이 성공이라는 건아님 (성공일 수도, 실패일 수도 있음)

function xhr({
  method = 'GET',
  url = '',
  success = null,
  fail = null,
  body = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
} = {}) {
  // 구조분해할당 (앞에 option 삭제)
  // const { method, url, success, fail, body } = option;

  const xhr = new XMLHttpRequest();
  // console.log(xhr.readyState);

  xhr.open(method, url);
  // xhr.open('통신방식', 통신 URL)
  // 통신방식은 대소문자 상관 없으나, 관례는 대문자로 작성

  // 객체의 key, value를 분리 (Object, enttries)
  // 반복문 (forEach)

  if (!method === 'DELETE') {
    Object.entries(headers).forEach(([k, v]) => {
      xhr.setRequestHeader(k, v);
    });
  }

  // DELETE 일때는 해더가 전송이 되면 안됨

  // xhr.setRequestHeader(key, value);
  // xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.addEventListener('readystatechange', () => {
    const { status, response, readyState } = xhr;

    if (readyState === 4) {
      // xhr의 readystate의 값이 4일 경우

      if (status >= 200 && status < 400) {
        // xhr의 status의 값이 200보다 크거나, 400보다 작으면

        const data = JSON.parse(response);
        success(data);
        // console.log(data);
        // 콘솔창에 respone 값을 나타내라.
      } else {
        fail({ message: '알 수 없는 오류가 발생했습니다.' });
        // 그게 아니면 실패라고 콘솔창에 나타내라.
      }
    }
  });
  xhr.send(JSON.stringify(body));
  // 여기다 body를 실어줌 (post 통신)
  // 객체로 보내면 안되서 JSON의 stringify를 사용해서 묶어서 보내줌
}

// 콜백 함수
// xhr(
//   'GET',
//   END_POINT,
//   (data) => {
//     console.log(data);
//   },
//   // 실패한 부분에 대한 콜백 함수
//   (err) => {
//     console.log(err.message);
//   }
// );

// post 통신을 위한 새로운 데이터 작성
const obj = {
  name: 'tiger',
  age: 38,
};

// xhr({
//   method:"DELETE",
//   url: END_POINT,
//   success: (data)=>{
//     console.log( data );
//   },
//   fail: ()=>{},
// })

xhr.get = (url, success, fail) => {
  xhr({ url, success, fail });
};

xhr.post = (url, body, success, fail) => {
  xhr({
    method: 'POST',
    url,
    body,
    success,
    fail,
  });
};

xhr.put = (url, body, success, fail) => {
  xhr({
    method: 'PUT',
    url,
    body,
    success,
    fail,
  });
};

xhr.delete = (url, success, fail) => {
  xhr({
    method: 'DELETE',
    url,
    success,
    fail,
  });
};

// xhr.delete(
//   END_POINT,
//   (data)=>{
//     console.log( data );
//   }
// )

// xhr을 promise 방식으로 바꾸기
// mixin

const defaultOptions = {
  method: 'GET',
  url: '',
  body: null,
  errorMessage: '서버와의 통신이 원활하지 않습니다.',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export function xhrPromise(options = {}) {
  const { method, url, errorMessage, body, headers } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  if (!(method === 'DELETE')) {
    Object.entries(headers).forEach(([k, v]) => {
      xhr.setRequestHeader(k, v);
    });
  }

  xhr.send(body ? JSON.stringify(body) : null);

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        // complete
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject({ message: '데이터 통신이 원활하지 않습니다.' });
        }
      }
    });
  });
}

// xhrPromise({
//   method:'GET',
//   url:END_POINT
// })
// .then((res)=>{
//   console.log( res );

// })
// .catch((err)=>{
//   console.log( err );

// })

xhrPromise.get = (url) => xhrPromise({ url });
xhrPromise.post = (url, body) => xhrPromise({ url, body, method: 'POST' });
xhrPromise.put = (url, body) => xhrPromise({ url, body, method: 'PUT' });
xhrPromise.delete = (url) => xhrPromise({ url, method: 'DELETE' });

// xhrPromise.get(END_POINT)
// .then((res)=>{

//   console.log( res );

//   res.forEach(({website})=>{

//     const tag = `
//       <div>site : ${website}</div>
//     `

//     document.body.insertAdjacentHTML('beforeend',tag)

//   })

// })
// .then(()=>{

// })
// .catch(()=>{

// })

// xhrPromise.put()
// xhrPromise.delete()
