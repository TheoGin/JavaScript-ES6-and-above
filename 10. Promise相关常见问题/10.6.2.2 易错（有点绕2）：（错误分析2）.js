async function m1() {
  return 1; // Promise { <fulfilled> 1 }
}

async function m2() {
  const n = await m1(); // Promise { <fulfilled> 1 }
  console.log(n)
  return 2; // Promise { <fulfilled> 2 }
} // Promise { pending }

async function m3() {
  const n = m2(); // Promise { pending } -> Promise { <fulfilled> 2 }
  console.log(n);
  return 3; // Promise { <fulfilled> 3 }
}

m3().then(n => { // Promise { <fulfilled> 3 }
  console.log(n);
});

m3();

console.log(4);

/*
执行栈：m1(), m2(), m3()

微队列：await m1(); fn3; await m1();
      fn1;  fn3;        fn1();
宏队列：
* */

/*
Promise { pending }
Promise { pending }
4
1
3
1
* */