async function m1() {
  return 1; // 该函数的返回值是Promise完成后的数据
}
console.log('m1()', m1()) // m1() Promise { 1 }

// 上面等价于
function m2() {
  // return Promise.resolve(1); // 若返回的是Promise，则method得到的Promise状态和其一致
  return new Promise((resolve) => {
    resolve(1)
  }); // 若返回的是Promise，则method得到的Promise状态和其一致
}
console.log('m2()', m2()) // m2() Promise { 1 }

async function m3() {
  throw new Error(2); // 若执行过程报错，则任务是rejected
}
console.log('m3()', m3()) // m3() Promise { <rejected> Error: 2 at ... }

function m4() {
  return Promise.reject(new Error(2))
}
console.log('m4()', m4()) // m4() Promise { <rejected> Error: 2 at ... }

/*
(node:6580) UnhandledPromiseRejectionWarning: Error: 2
(node:6580) UnhandledPromiseRejectionWarning: Unhandled promise rejection.
* */
