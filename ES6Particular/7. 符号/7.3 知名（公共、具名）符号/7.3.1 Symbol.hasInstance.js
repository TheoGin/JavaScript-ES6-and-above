function A() { }

const obj = new A();

console.log(obj instanceof A); // true

// Symbol.hasInstance 是一个函数
console.log(A[Symbol.hasInstance](obj)); // true

/*
 // 应该是被设置了  Object.defineProperty 配置 writable为 false，所以改不了，但可以通过 Object.defineProperty 更改
 A[Symbol.hasInstance] = function (obj) {
 return false;
 };*/
Object.defineProperty(A, Symbol.hasInstance, {
  get() {
    return function (obj) {
      console.log(obj); // A {} （A的实例）
      return false;
    };
  },
});

console.log(obj); // A {} （A的实例）
console.log(A[Symbol.hasInstance](obj)); // false