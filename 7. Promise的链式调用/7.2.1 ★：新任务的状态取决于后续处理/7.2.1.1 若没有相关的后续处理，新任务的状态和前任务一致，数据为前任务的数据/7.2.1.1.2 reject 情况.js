// 若没有相关的后续处理，新任务的状态和前任务一致，数据为前任务的数据

const promise1 = new Promise((resolve, reject) => {
  reject("fail");
});

// 没有处理 reject
const promise2 = promise1.then((data) => {
  console.log(data);
});

console.log('promise1', promise1);

setTimeout(() => {
  console.log('promise2', promise2);
}, 1000)

/*
promise1 Promise { <rejected> 'fail' }
(node:3436) UnhandledPromiseRejectionWarning: fail
(node:3436) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 2)
(node:3436) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
promise2 Promise { <rejected> 'fail' }
*/