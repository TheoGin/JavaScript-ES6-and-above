async function f() {
  const n = undefined;
  console.log(n.toString());
  return 123;
}

console.log(f())

/*
Promise {
  <rejected> TypeError: Cannot read property 'toString' of null
      at ... }
* */