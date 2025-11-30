// Promise.reject(reason) 直接返回一个拒绝状态的任务
Promise.reject(new Error('出问题了'))
  .catch(reason => {
    console.log(reason)
  })

// 等价于
new Promise((resolve, reject) => {
  reject(new Error('出问题了'))
})
  .catch(reason => {
    console.log(reason)
  })
/*
Error: 出问题了
    at Object.<anonymous> (D:\DuYi\2、JavaScript\code\JavaScript-ES6-and-above\8. Promise的静态方法\8.2.2 Promise.reject(reason) 直接返回一个拒绝)
    at Module._compile (internal/modules/cjs/loader.js:999:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
    at Module.load (internal/modules/cjs/loader.js:863:32)
    at Function.Module._load (internal/modules/cjs/loader.js:708:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
    at internal/main/run_main_module.js:17:47
Error: 出问题了
    at ...
* */