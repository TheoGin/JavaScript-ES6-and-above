async function m1() {
  return 1; // Promise { <fulfilled> 1 }
}

async function m2() {
  const n = await m1();
  console.log(n)
  return 2; // Promise { <fulfilled> 2 }
}

async function m3() {
  const n = m2(); // Promise { pending } -> Promise { <fulfilled> 2 }
  console.log(n);
  return 3; // Promise { <fulfilled> 3 }
}

m3().then(n => {
  console.log(n);
});

m3();

console.log(4);
/*
Promise { pending }
4
1
Promise { <fulfilled> 2 }
3
* */