async function method1() {
  try {
    const data = await Promise.reject(new Error('err'));
    console.log(data)
  } catch (e) {
    console.log(e)
  }
}

method1()

async function method2() {
  try {
    const data = await new Error('err');
    console.log(data)
  } catch (e) {
    console.log(e)
  }
}

method2()