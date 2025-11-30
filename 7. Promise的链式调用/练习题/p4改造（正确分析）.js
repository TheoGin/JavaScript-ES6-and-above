// 下面代码的输出结果是什么

const promise = new Promise((resolve, reject) => {
  resolve(1); // promise1 fulfilled 1
})
  .then((res) => {
    console.log(res);
    return new Error('2'); // promise2 fulfilled Error(2)
  })
  .catch((err) => { // promise3 fulfilled Error(2)
    throw err;
    return 3;
  })
  .then((res) => {
    console.log(res); // promise Error: 2
    // promise4 fulfilled undefined
  });

console.log(promise)
setTimeout(() => {
  console.log(promise)
})

/*
promise pending
1
promise Error: 2
 ...
promise fulfilled undefined
*/