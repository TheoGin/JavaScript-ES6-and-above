async function method1() {
  const number = await Promise.resolve(1);
  console.log(number); // 1
}
method1()

// 上面的函数等同于
function method2() {
  return new Promise((resolve, reject) => {
    Promise.resolve(1).then(number => {
      console.log(number); // 1
    })
  })
}
method2()