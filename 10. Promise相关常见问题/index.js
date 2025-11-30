async function m() {
  console.log(0);
  const n = await 1;
  console.log(n);
}

// 上面等价于
async function m() {
  return Promise.resolve(1).then(n => {
    console.log(n)
  })
}