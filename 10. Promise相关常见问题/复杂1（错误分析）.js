var a;
var b = new Promise((resolve, reject) => {
  console.log('promise1');
  setTimeout(()=>{
    resolve();
  }, 1000);
}).then(() => {
  console.log('promise2');
}).then(() => {
  console.log('promise3');
}).then(() => {
  console.log('promise4');
});

a = new Promise(async (resolve, reject) => {
  console.log(a);
  await b;
  console.log(a);
  console.log('after1');
  await a
  resolve(true);
  console.log('after2');
});

console.log('end');

/*
promise1
Promise { pending }
end
Promise { pending }
after1
promise2
promise3
promise4
* */

/*
b: promise1 { pending -> fulfilled undefined }
   promise2: pending -> fulfilled undefined
   promise3: pending -> fulfilled undefined
   promise4: pending -> fulfilled undefined

a = Promise { pending }
执行栈：

微队列：await b; 输出 promise2; await a;  输出 promise3;  输出 promise4;
宏队列：setTimeout -> resolve[输出 promise2]
* */