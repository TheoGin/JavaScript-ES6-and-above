const Hero = (() => {
  const getRandom = Symbol("getRandom");

  return class {
    constructor(attack, healthPoint, defense) {
      this.attack = attack;
      this.healthPoint = healthPoint;
      this.defense = defense;
    }

    hit() {
      // 伤害：攻击力 * 随机数（0.8 ~ 1.1)
      return this.attack * this[getRandom](0.8, 1.1);
    }

    /**
     * 根据最小值和最大值产生一个随机数
     * @param min
     * @param max
     * @returns {*}
     */
    [getRandom](min, max) { // 不希望被外面访问，只想在内部用，提出去，如果要用到 this 内部变量又麻烦：实现私有 ——》用 Symbol
      return min + Math.random() * (max - min);
    }
  };
})();

const hero = new Hero(32, 12, 11);
console.log(hero.hit());
// console.log(hero.getRandom(0.8, 1.1)); // Uncaught TypeError: hero.getRandom is not a function
/*
 const getRandom = Symbol("getRandom");
 console.log(hero[getRandom]()); // Uncaught TypeError: hero[getRandom] is not a function*/
