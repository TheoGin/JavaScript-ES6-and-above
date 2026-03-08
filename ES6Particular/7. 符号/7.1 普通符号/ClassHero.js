
class Hero {
  constructor(attack, healthPoint, defense) {
    this.attack = attack;
    this.healthPoint = healthPoint;
    this.defense = defense;
  }

  hit() {
    return this.attack * this.getRandom(0.8, 1.1);
  }

  getRandom(min, max) { // 不希望被外面访问，只想在内部用，提出去，如果要用到 this 内部变量又麻烦：实现私有 ——》用 Symbol
    return min + Math.random() * (max - min);
  }
}

const hero = new Hero(32, 12, 11);
console.log(hero.hit());
console.log(hero.getRandom(0.8, 1.1));