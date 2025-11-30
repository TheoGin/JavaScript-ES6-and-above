// Promise.resolve(data) 直接返回一个完成状态的任务
Promise.resolve(1)
  .then(data => {
    console.log(data) // 1
  })

// 等价于
new Promise((resolve) => {
  resolve(1)
})
  .then(data => {
    console.log(data) // 1
  })