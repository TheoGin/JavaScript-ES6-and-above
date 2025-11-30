// 下面代码的输出结果是什么
const promise = new Promise((resolve, reject) => {
  resolve(1); // promise1 fulfilled 1
})
  // 7.2.1.3 若后续处理执行了，则根据后续处理的情况确定新任务的状态
  .then((res) => {
    console.log(res);
    // 7.2.1.3.1 后续处理执行无错，新任务的状态为完成，数据为后续处理的返回值
    return 2; // promise2 fulfilled 2
  })
  // 7.2.1.1 若没有相关的后续处理，新任务的状态和前任务一致，数据为前任务的数据（7.2.1.1.1 resolve情况）
  .catch((err) => { // promise3 fulfilled 2
    return 3;
  })
  .then((res) => {
    console.log(res);
    // promise4 fulfilled undefined
  });

// const arr = [].map(i => i).join() // 链式是最后一个的返回值
console.log(promise) // Promise { <pending> }

setTimeout(() => {
  console.log(promise) // Promise { undefined }
})

/*
promise1 fulfilled 1
promise2 fulfilled 2
promise3 fulfilled 2
promise4 fulfilled undefined
* */

/*
1
2
* */