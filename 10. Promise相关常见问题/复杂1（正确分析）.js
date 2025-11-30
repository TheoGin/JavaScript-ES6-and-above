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
undefined
end
promise2
promise3
promise4        【唤醒 await b】
Promise { pending }
after1
* */

/*
a: undefined -> Promise { pending }    【await b之后变成pending】
b: p4 的 pending ！！！

微任务：await b【等待的是 p4的状态】；await a【永远是pending，这个回调永远不会执行，但不会卡住】
宏任务：1秒后输出promise2

p1: pending -> fulfilled undefined
p2: pending -> fulfilled undefined
p3: pending -> fulfilled undefined
p4: pending -> fulfilled undefined
* */