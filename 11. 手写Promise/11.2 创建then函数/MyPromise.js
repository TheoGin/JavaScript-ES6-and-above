const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {

  /**
   * 创建一个 Promise
   * @param{ Function } executor 任务执行器，立即执行函数
   */
  constructor(executor) {
    this._state = PENDING; // 状态
    this._value = undefined; // 数据
    try {
      executor(this._resolve.bind(this), this._reject.bind(this)); // 可能会报错
    } catch (e) {
      this._reject(e);
    }
  }

  /**
   * 修改状态和值
   * @param{ PENDING | FULFILLED | REJECTED } newState
   * @param { any } value
   */
  changeState(newState, value) {
    // 状态不可逆
    if (this._state !== PENDING) {
      return;
    }
    this._state = newState;
    this._value = value;
  }

  /**
   * 标记当前任务完成
   * @param { any } data 任务完成的相关数据
   */
  _resolve(data) {
    // 修改状态和值
    this.changeState(FULFILLED, data);
  }

  /**
   * 标记当前任务失败
   * @param { any } reason 任务失败的相关原因
   */
  _reject(reason) {
    // 修改状态和值
    this.changeState(REJECTED, reason);
  }

}

const myPromise = new MyPromise((resolve, reject) => {
  // resolve(1);
  // reject(2);
  throw new Error("err");
});
console.log(myPromise);

/*
MyPromise { _state: 'fulfilled', _value: 1 }
MyPromise { _state: 'rejected', _value: 2 }
MyPromise {
  _state: 'rejected',
  _value: Error: err
      at D:\DuYi\2、JavaScript\code\JavaScript-ES6-and-above\11. 手写Promise\11.1 实现状态的变化\MyPromise.js:58:9
      at new MyPromise (D:\DuYi\2、JavaScript\code\JavaScript-ES6-and-above\11. 手写Promise\11.1 实现状态的变化\MyPromise.js:15:7)
      at Object.<anonymous> (D:\DuYi\2、JavaScript\code\JavaScript-ES6-and-above\11. 手写Promise\11.1 实现状态的变化\MyPromise.js:55:19)
      at Module._compile (node:internal/modules/cjs/loader:1254:14)
      at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
      at Module.load (node:internal/modules/cjs/loader:1117:32)
      at Module._load (node:internal/modules/cjs/loader:958:12)
      at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
      at node:internal/main/run_main_module:23:47
}
* */
