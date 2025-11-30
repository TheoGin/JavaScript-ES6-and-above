// 后续执行后返回的是一个任务对象，新任务的状态和数据与该任务对象一致
const promise1 = new Promise(resolve => {
  resolve('解决了')
});

const promise2 = promise1.then(data => {
  console.log('promise1', promise1)
  return new Promise((resolve, reject) => {})
});

setTimeout(() => {
  console.log('promise2', promise2)
}, 1000)
/*
promise1 Promise { '解决了' }
promise2 Promise { <pending> }
*/