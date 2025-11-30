// 后续处理执行有错，新任务的状态为失败，数据为异常对象
const promise1 = new Promise(resolve => {
  resolve('解决了')
});

const promise2 = promise1.then(data => {
  console.log('promise1', promise1)
  throw 123;
  // throw new Error(123);
});

setTimeout(() => {
  console.log('promise2', promise2)
}, 1000)

/*
promise1 Promise { '解决了' }
(node:16832) UnhandledPromiseRejectionWarning: 123
(node:16832) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:16832) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
promise2 Promise { <rejected> 123 }
 */