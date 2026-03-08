const obj = {
  a: 1,
  b: 2,
};
const arr = [1, 2, 3];
/*
 console.log(obj.toString()); // [object Object]
 console.log(arr.toString()); // 1,2,3  【数组的 toString 被重写过】*/
console.log(Object.prototype.toString.call(obj)); // [object Object]
console.log(Object.prototype.toString.call(arr)); // [object Array]

class Person {

  /* [Symbol.toStringTag]() {
    return 123;
  } */
  // [Symbol.toStringTag] 是属性 ，而不是方法
  [Symbol.toStringTag] = 'Person'
}

const person = new Person();

// console.log(Object.prototype.toString.call(Person)); // [object Function]

// console.log(Object.prototype.toString.call(person)); // [[object Object]
// 打印实例的！！！   加完 [Symbol.toStringTag] = 'Person'
console.log(Object.prototype.toString.call(person)); // [[object Person]