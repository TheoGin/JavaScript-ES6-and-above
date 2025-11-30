async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2');
}

console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0)

async1();

new Promise(function(resolve) {
  console.log('promise1');
  resolve();
}).then(function() {
  console.log('promise2');
});
console.log('script end');

/*
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
* */

/*
宏任务：输出setTimeout
微任务：输出async1 end; 输出promise2
    await Promise { <fulfiled> undefined };

async1: Promise { <pending> } -> Promise { <fulfiled> undefined }
async2: Promise { <fulfiled> undefined }
* */