// 下面代码的输出结果是什么

const promise = new Promise((resolve, reject) => {
  resolve(1); // promise1 fulfilled 1
})
  .then((res) => {
    console.log(res);
    return new Error('2'); // promise2 rejected Error('2')
  })
  .catch((err) => {
    throw err; // promise3 rejected Error('2')
    return 3;
  })
  .then((res) => { // promise4 rejected Error('2')
    console.log(res);
  });

console.log(promise)
setTimeout(() => {
  console.log(promise)
})
/**

 */

/*
pending
1
rejected Error('2')
unhandleErrorWarning
*/