// Promise.allSettled(任务数组)
Promise.allSettled([
  Promise.reject(1),
  Promise.resolve(2),
  Promise.reject(3),
])
  // 1. 返回一个任务
  .then(data => { // 2. 任务数组全部已决，则成功
  // 3. 该任务不会失败
    console.log(data)
    /*
      [
        { status: 'rejected', reason: 1 },
        { status: 'fulfilled', value: 2 },
        { status: 'rejected', reason: 3 }
      ]
    * */
  })