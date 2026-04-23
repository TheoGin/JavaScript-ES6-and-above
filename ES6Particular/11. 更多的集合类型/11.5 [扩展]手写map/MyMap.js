class MyMap {
  _data = [];

  [Symbol.toStringTag] = "MyMap"; // 打印的时候是：[object MyMap]，而不是 [object Object]

  constructor(iterable) {
    if (iterable === undefined || iterable === null) {
      return;
    }

    // 验证是否是可迭代的对象
    if (typeof iterable[Symbol.iterator] !== "function") {
      throw new TypeError(`${ typeof iterable } ${ iterable } is not iterable (cannot read property Symbol(Symbol.iterator))`);
    }

    for (const entryObject of iterable) {
      if (typeof entryObject[Symbol.iterator] !== "function") {
        throw new TypeError(`${ typeof entryObject } ${ entryObject } is not an entry object`);
      }
      // 不能用下标取，因为 entryObject 可能是可迭代对象
      const iterator = entryObject[Symbol.iterator]();
      const key = iterator.next().value;
      const value = iterator.next().value;
      this.set(key, value);
    }
  }

  /**
   * 只读属性，返回 Map 对象中键值对的数量。
   * @returns {number}
   */
  get size() {
    return this._data.length;
  }

  set(key, value) {
    const entryObject = this._getEntryObject(key);
    if (entryObject) {
      entryObject[1] = value;
      return this;
    }
    this._data.push([key, value]);
    return this;
  }

  has(key) {
    return !!this._getEntryObject(key);
  }

  _getEntryObject(key) {
    for (const entryObject of this._data) {
      // if (entryObject[0] === key) {
      if (this._isEqual(entryObject[0], key)) {
        return entryObject;
      }
    }
  }

  get(key) {
    const entryObject = this._getEntryObject(key);
    return entryObject ? entryObject[1] : undefined;
  }

  delete(key) {
    for (let i = 0; i < this._data.length; i++) {
      // if (this._data[i][0] === key) {
      if (this._isEqual(this._data[i][0], key)) {
        this._data.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  _isEqual(value1, value2) {
    // +0 和 -0 严格相等的
    // if (value1 === value2) {
    if (value1 === 0 && value2 === 0) {
      return true;
    }

    return Object.is(value1, value2);
  }

  clear() {
    this._data.length = 0;
  }

  *[Symbol.iterator]() {
    for (const entryObj of this._data) {
      yield entryObj;
    }
  }

  entries() {
    return this[Symbol.iterator]();
  }

  *keys() {
    for (const entryObj of this._data) {
      yield entryObj[0];
    }
  }

  *values() {
    for (const entryObj of this._data) {
      yield entryObj[1];
    }
  }

  forEach(callback) {
    for (const entryObj of this._data) {
      callback(entryObj[1], entryObj[0], this);
    }
  }
}