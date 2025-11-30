/* new Promise((resolve, reject) => {
  reject(new Error("错了"));
}).then(null, (err) => {
  console.log(err);
}); */

// 等价
new Promise((resolve, reject) => {
  reject(new Error("错了"));
}).catch((err) => {
  console.log(err);
});

/* 
Error: 错了
    at d:\DuYi\2、JavaScript\code\JavaScript-ES6-and-above\7. Promise的链式调用\7.1 catch方法.js:2:10
    at new Promise (<anonymous>)
    at Object.<anonymous> (d:\DuYi\2、JavaScript\code\JavaScript-ES6-and-above\7. Promise的链式调用\7.1 catch方法.js:1:1)
    at Module._compile (internal/modules/cjs/loader.js:999:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
    at Module.load (internal/modules/cjs/loader.js:863:32)
    at Function.Module._load (internal/modules/cjs/loader.js:708:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
    at internal/main/run_main_module.js:17:47
*/
