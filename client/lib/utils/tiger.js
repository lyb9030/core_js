// fetch 코드

const END_POINT = 'https://jsonplaceholder.typicode.com/users';

// const response = await fetch(END_POINT, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ name: 'tiger', age: 33 }),
// });

// const data = await response.json();

// console.log(data);

// // console.log(await response.json());

// 위 코드를 재사용 가능한 코드로 변경하게

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const tiger = async (options) => {
  // option 과 defaultOptions 이 합쳐지면 됨 (객체 합성)
  const { url, ...rest } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  // const { url, method, body, headers } = config;
  // -> url을 제외한 나머지 객체 의 값으로 변경
  // const { url, ...restoption } = config;

  const response = await fetch(url, rest);

  // 성공한 것이 가정이라, 조금 더 안전한 코드 추가

  if (response.ok) {
    response.data = await response.json();
  }

  // const response = await tiger({ url: END_POINT });
  return response;
};

// console.log(await response.json());

//tiger.get()
tiger.get = (url, options) => {
  return tiger({
    url,
    ...options,
  });
};

//tiger.post()
tiger.post = (url, body, options) => {
  return tiger({
    method: 'POST',
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

tiger.post(END_POINT, { name: 'tiger' });

//tiger.put()
tiger.put = (url, body, options) => {
  return tiger({
    method: 'PUT',
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

//tiger.patch()
tiger.patch = (url, body, options) => {
  return tiger({
    method: 'PATCH',
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

//tiger.delete()
tiger.delete = (url, options) => {
  return tiger({
    method: 'DELETE',
    url,
    ...options,
  });
};

// (async function(){

//   const response = await tiger.delete(END_POINT+'/1');

//   console.log(response.data);

// })()

function getGeolocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((data) => {
      const { latitude: lat, longitude: long } = data.coords;
      resolve({ lat, long });
    });
  });
}

const data = await getGeolocation();

// console.log( data );
