// 下面代码的输出结果是什么
const pro1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

const pro2 = pro1.then((data) => {
  throw 3;
  return data + 1;
});

const pro3 = pro2.then((data) => {
  console.log(data);
});

console.log(pro1, pro2, pro3);

setTimeout(() => {
  console.log(pro1, pro2, pro3);
}, 2000);

/*
Promise { <pending> }  Promise { <pending> }  Promise { <pending> }
Promise { <fulfilled> 1 }  Promise { <rejected> 3 }  Promise { <rejected> 3 }
* */

/*
Promise { <pending> } Promise { <pending> } Promise { <pending> }
(node:13652) UnhandledPromiseRejectionWarning: 3
(node:13652) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:13652) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
Promise { 1 } Promise { <rejected> 3 } Promise { <rejected> 3 }
* */