/**
 * 根据页码获取学生数据，返回Promise
 * @param {Number} page 页码
 */
function fetchStudents(page) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject(new Error(`网络错误！获取第${page}页数据失败！`));
        return;
      }
      // 模拟学生数据
      const stus = new Array(10).fill(null).map((d, i) => ({
        id: `NO.${(page - 1) * 10 + i + 1}`,
        name: `姓名${(page - 1) * 10 + i + 1}`,
      }));
      resolve(stus);
    }, Math.floor(Math.random() * 5000));
  });
}

// 利用 fetchStudents 函数，完成下面的练习
/*fetchStudents(1)
  .then(students => {
    console.log(students)
    /!*
      [
        { id: 'NO.1', name: '姓名1' },
        { id: 'NO.2', name: '姓名2' },
        { id: 'NO.3', name: '姓名3' },
        { id: 'NO.4', name: '姓名4' },
        { id: 'NO.5', name: '姓名5' },
        { id: 'NO.6', name: '姓名6' },
        { id: 'NO.7', name: '姓名7' },
        { id: 'NO.8', name: '姓名8' },
        { id: 'NO.9', name: '姓名9' },
        { id: 'NO.10', name: '姓名10' }
      ]
    * *!/
  })
  .catch(reason => {
    console.log(reason)
  })*/

// 获取1-10页的学生，最终按照页码的顺序合并成一个数组，任何一页的数据获取出现错误，则任务不再继续，打印错误消息
// const promises = new Array(10).fill(null).map((item, index) => fetchStudents(index + 1)).flatMap((item) => item);
// 还没拿到结果数组，flatMap也没用
const promises = new Array(10)
  .fill(0)
  .map((item, index) => fetchStudents(index + 1));

// 10 页数据不一定是按顺序完成，但是 Promise.all 会按顺序汇总
/*Promise.all(promises)
  .then(value => {
    /!*console.log(value.flatMap((item) => {
      console.log('item', item)
      return item
    }))*!/
    // 或者用 flat
    console.log(value.flat())
  })
  .catch(reason => {
    // 打印错误消息
    console.log(reason)
  })*/

/*
[
  { id: 'NO.1', name: '姓名1' },
  { id: 'NO.2', name: '姓名2' },
  ... ,
  { id: 'NO.99', name: '姓名99' },
  { id: 'NO.100', name: '姓名100' }
]
* */

/*const promises = [];

for (let i = 0; i < 10; i++) {
  promises.push(fetchStudents(i + 1))
}

const promise = Promise.all(promises);
setTimeout(() => {
  // console.log(promises)
  console.log(promise)
}, 10000)*/

// 获取1-10页的学生，最终按照页码的顺序合并成一个数组，如果某些页码的数据获取失败，就不加入该数据即可
/*Promise.allSettled(promises).then((students) => {
  console.log(
    students
      .filter((item) => item.status === "fulfilled")
      .map((item) => item.value)
      .flat()
  );
});*/
/*
[
  { id: 'NO.1', name: '姓名1' },
  ...,
  { id: 'NO.9', name: '姓名9' },
  { id: 'NO.10', name: '姓名10' },
  ...,
  { id: 'NO.80', name: '姓名80' },
  { id: 'NO.81', name: '姓名81' },
  ...,
  { id: 'NO.89', name: '姓名89' },
  { id: 'NO.90', name: '姓名90' },
  { id: 'NO.91', name: '姓名91' },
  ...,
  { id: 'NO.100', name: '姓名100' }
]
* */

// 获取1-10页的学生，打印最先获取到的数据，如果全部都获取失败，则打印所有的错误消息
/*Promise.any(promises)
  .then(student => {
    console.log(student)
    /!*
    [
      { id: 'NO.71', name: '姓名71' },
      ...,
      { id: 'NO.80', name: '姓名80' }
    ]
    * *!/
  })
  // aggregateError 合计的错误
  .catch(aggregateError => {
    console.log(aggregateError.errors)
    /!*
    [
      Error: 网络错误！获取第1页数据失败！
          at Timeout._onTimeout (D:\DuYi\2、JavaScript\code\JavaScript-ES6-and-above\8. Promise的静态方法\练习题\p1.js:9:16)
          at listOnTimeout (node:internal/timers:569:17)
          at process.processTimers (node:internal/timers:512:7),
      ...,
      Error: 网络错误！获取第10页数据失败！...,
    ]
    * *!/
  })*/

// 获取1-10页的学生，输出最先得到的结果（有结果输出结果，有错误输出错误）
Promise.race(promises)
  .then((student) => {
    console.log(student);
    /*[
      { id: 'NO.41', name: '姓名41' },
      ...,
      { id: 'NO.50', name: '姓名50' }
    ]*/
  })
  .catch((reason) => {
    console.log(reason);
    /*
    Error: 网络错误！获取第7页数据失败！
    at Timeout._onTimeout (D:\DuYi\2、JavaScript\code\JavaScript-ES6-and-above\8. Promise的静态方法\练习题\p1.js:9:16)
    at listOnTimeout (node:internal/timers:569:17)
    at process.processTimers (node:internal/timers:512:7)
    * */
  });
