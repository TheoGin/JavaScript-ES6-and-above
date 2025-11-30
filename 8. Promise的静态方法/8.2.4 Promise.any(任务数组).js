// Promise.any(任务数组)
Promise.any([
  Promise.reject(1),
  Promise.reject(2),
  Promise.reject(3),
])
  // 1. 返回一个任务
  .catch(aggregateError => {
    // 3. 任务全部失败则失败
    console.log(aggregateError) // [AggregateError: All promises were rejected] { [errors]: [ 1, 2, 3 ] }
    console.log(aggregateError.errors) // [ 1, 2, 3 ]
  })

Promise.any([
  Promise.reject(1),
// 2. 任务数组任一成功则成功
  Promise.resolve(2),
  Promise.reject(3),
])
  .then(data => {
    console.log(data) // 2
  })
  /*.catch(aggregateError => {
    console.log(aggregateError.errors)
  })*/