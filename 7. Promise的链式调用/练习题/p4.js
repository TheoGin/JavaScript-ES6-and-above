// 下面代码的输出结果是什么

const promise = new Promise((resolve, reject) => {
  throw new Error(1);
})
  .then((res) => {
    console.log(res);
    return new Error('2');
  })
  .catch((err) => {
    throw err;
    return 3;
  })
  .then((res) => {
    console.log(res);
  });

console.log(promise)
setTimeout(() => {
  console.log(promise)
})
/**
 pending
 UnhandledPromiseRejectionWarning: 1
 UnhandledPromiseRejectionWarning
 rejected Error: 1
  ...
 */

/*
Promise { <pending> }
(node:9204) UnhandledPromiseRejectionWarning: Error: 1
    at D:\DuYi\2、JavaScript\code\JavaScript-ES6-and-above\7. Promise的链式调用\练习题\p4.js:4:9
    at new Promise (<anonymous>)
    at Object.<anonymous> (D:\DuYi\2、JavaScript\code\JavaScript-ES6-and-above\7. Promise的链式调用\练习题\p4.js:3:17)
    at Module._compile (internal/modules/cjs/loader.js:999:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
    at Module.load (internal/modules/cjs/loader.js:863:32)
    at Function.Module._load (internal/modules/cjs/loader.js:708:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
    at internal/main/run_main_module.js:17:47
(node:9204) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 2)
(node:9204) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
Promise {
  <rejected> Error: 1
      at D:\DuYi\2、JavaScript\code\JavaScript-ES6-and-above\7. Promise的链式调用\练习题\p4.js:4:9
      at new Promise (<anonymous>)
      at Object.<anonymous> (D:\DuYi\2、JavaScript\code\JavaScript-ES6-and-above\7. Promise的链式调用\练习题\p4.js:3:17)
      at Module._compile (internal/modules/cjs/loader.js:999:30)
      at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
      at Module.load (internal/modules/cjs/loader.js:863:32)
      at Function.Module._load (internal/modules/cjs/loader.js:708:14)
      at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
      at internal/main/run_main_module.js:17:47
}
*/