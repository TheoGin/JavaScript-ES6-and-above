// 1. 后续处理执行无错，新任务的状态为完成，数据为后续处理的返回值
const promise1 = new Promise(resolve => {
  resolve('解决了')
});

const promise2 = promise1.then(data => {
  console.log('promise1', promise1)
  return 123; // 不返回则是 undefined
});

setTimeout(() => {
  console.log('promise2', promise2)
}, 1000)

/*
promise1 Promise { '解决了' }
promise2 Promise { 123 }
 */