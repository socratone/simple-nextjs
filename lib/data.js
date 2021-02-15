const DELAY = 500;

// server side에서만 쓰므로 query를 써서 데이터베이스에 바로 접근할 수도 있다.
export async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello world');
    }, DELAY);
  });
}