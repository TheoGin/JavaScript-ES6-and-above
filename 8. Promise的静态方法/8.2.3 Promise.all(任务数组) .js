// Promise.all(任务数组)

Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
])
  // 1. 返回一个任务
  .then(data => {
    // 2. 任务数组全部成功则成功
    console.log(data) // [ 1, 2, 3 ]
  })

Promise.all([
  Promise.resolve(1),
  // 3. 任何一个失败则失败
  Promise.reject(2),
  Promise.resolve(3),
])
  /*.then(data => {
    console.log(data)
  })*/
  .catch(reason => {
    console.log(reason) // 2
  })