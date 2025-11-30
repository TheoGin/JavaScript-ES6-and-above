const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('解决了')
  }, 2000)
})

// console.log('promise1', promise1);
// 若有后续处理但还未执行，新任务挂起
const promise2 = promise1.then(data => {
  // console.log(data)
})

setTimeout(() => {
  console.log('promise2', promise2);
}, 1000)

// promise2 Promise { <pending> }