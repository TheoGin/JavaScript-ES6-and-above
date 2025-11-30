// 下面代码的输出结果是什么

new Promise((resolve, reject) => {
  resolve(); // promise1 fulfilled undefined
})
  .then((res) => {
    console.log(res.toString()); // promise2 rejected cannot call toString of undefined
    return 2;
  })
  .catch((err) => {
    return 3; // promise3 fulfilled 3
  })
  .then((res) => {
    console.log(res);
    // promise4 fulfilled undefined
  });



/*
promise1 fulfilled undefined
promise2 rejected cannot call toString of undefined
promise3 fulfilled 3
promise4 fulfilled undefined
* */

/* 没输出？ ×
3
* */
