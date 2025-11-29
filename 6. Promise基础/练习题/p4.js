// 下面的任务最终状态是什么，相关的数据或失败原因是什么，最终输出什么

const pro1 = new Promise((resolve, reject) => {
  console.log("任务开始");
  resolve(1);
  reject(2); // 无效，不会报错
  resolve(3); // 无效，不会报错
  console.log("任务结束");
});

console.log(pro1);
/* 
任务开始
任务结束
Promise { 1 }
*/

/* 
任务开始
任务结束

最终状态是：fulfilled
resolve: 1
没有：reject: 2
*/

const pro2 = new Promise((resolve, reject) => {
  console.log("任务开始");
  resolve(1);
  resolve(2); // 无效，不会报错
  console.log("任务结束");
});

console.log(pro2);
/* 
任务开始
任务结束
Promise { 1 }
*/

/* 
任务开始
任务结束

最终状态是：fulfilled
resolve: 1
*/
