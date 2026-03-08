const hero = (function () {
  const getRandom = Symbol();
  return {
    attack: 30,
    healthPoint: 3, // 生命值
    defense: 11,
    hit() {
      return this.attack * this[getRandom](0.8, 1.1);
    },
    [getRandom](min, max) { // 不希望被外面访问，只想在内部用，提出去，如果要用到 this 内部变量又麻烦：实现私有 ——》用 Symbol
      return min + Math.random() * (max - min);
    },
  };
})();

console.log(hero.hit());
// console.log(hero.getRandom(0.8, 1.1)); // Uncaught TypeError: hero.getRandom is not a function
/*
 const getRandom = Symbol();
 console.log(hero[getRandom]()); // Uncaught TypeError: hero[getRandom] is not a function*/