// Promise.race(任务数组) 从异步当中比哪个状态最先变为已决
Promise.race([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, 500)
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // 2. 任务数组任一已决则已决，状态和其一致
      reject(1)
    }, 0) // 最先变为已决
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  }),
])
  // 1. 返回一个任务
  .then(data => {
    console.log('data', data)
  })
  .catch(reason => {
    console.log('reason', reason) // reason 1
  })