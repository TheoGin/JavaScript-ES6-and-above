const p = new Promise(() => {
  console.log("立即执行函数");
});

console.log(p);
/* 
立即执行函数
Promise { <pending> }
*/
