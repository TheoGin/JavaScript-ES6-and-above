Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)

// 等价于
Promise.resolve(1)
  .then(null)
  .then(null)
  .then(console.log)

// 最终等价于
Promise.resolve(1)
  .then(console.log)