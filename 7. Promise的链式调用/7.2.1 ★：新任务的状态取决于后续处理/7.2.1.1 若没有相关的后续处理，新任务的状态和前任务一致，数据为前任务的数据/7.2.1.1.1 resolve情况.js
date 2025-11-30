// 若没有相关的后续处理，新任务的状态和前任务一致，数据为前任务的数据

const promise1 = new Promise((resolve, reject) => {
  resolve("解决了");
});

const promise2 = promise1.catch((err) => {
  console.log(err);
});

console.log('promise1', promise1);

setTimeout(() => {
  console.log('promise2', promise2);
}, 1000)

/*
promise1 Promise { '解决了' }
promise2 Promise { '解决了' }
*/