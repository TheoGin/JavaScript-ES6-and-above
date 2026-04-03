class MySet {
  _data = [];

  constructor(iterable) {
    if (iterable === undefined) {
      this._data = [];
      return;
    }

    // 验证是否是可迭代的对象
    if (typeof iterable[Symbol.iterator] !== "function") {
      throw new TypeError(`${ typeof iterable } ${ iterable } is not iterable (cannot read property Symbol(Symbol.iterator))`);
    }

    for (const item of iterable) {
      this.add(item);
    }
  }

  get size() {
    return this._data.length;
  }

  add(value) {
    if (!this.has(value)) {
      this._data.push(value);
    }
    return this;
  }

  has(value) {
    for (const item of this._data) {
      if (this.isEqual(item, value)) {
        return true;
      }
    }
    return false;
  }

  /**
   * 判断两个数据是否相等
   * @param {*} value1
   * @param {*} value2
   */
  isEqual(value1, value2) {
    // 严格相等 不区分 +0 和 -0
    if (value1 === 0 && value2 === 0) {
      return true;
    }

    return value1 === value2;
  }

  delete(value) {
    for (let i = 0; i < this._data.length; i++) {
      if (this.isEqual(this._data[i], value)) {
        this._data.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  forEach(callback) {
    for (const item of this._data) {
      callback(item, item, this);
    }
  }

  clear() {
    this._data.length = 0;
  }

  * [Symbol.iterator]() {
    for (const item of this._data) {
      yield item;
    }
  }
}