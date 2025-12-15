const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {

  /**
   * 立即执行函数
   * @param{ Function } executor
   */
  constructor(executor) {
    this._state = PENDING;
    this._value = undefined;
    try {
      executor(this.resolve.bind(this), this.reject.bind(this)); // 可能会报错
    } catch (e) {
      this.reject(e);
    }
  }

  /**
   * 修改状态和值
   * @param{ PENDING | FULFILLED | REJECTED } state
   * @param { any } value
   */
  changeState(state, value) {
    // 状态不可逆
    if (this._state !== PENDING) {
      return;
    }
    this._state = state;
    this._value = value;
  }

  /**
   * 成功状态的任务
   * @param { any } data
   */
  resolve(data) {
    // 修改状态和值
    this.changeState(FULFILLED, data);
  }

  /**
   * 拒绝状态的任务
   * @param { any } reason
   */
  reject(reason) {
    // 修改状态和值
    this.changeState(FULFILLED, reason);
  }

}

/*const promise = new Promise((resolve, reject) => {
  reject(new Error("err"));
}).then((data) => {
  console.log(data);
}).catch((reason) => {
  console.log(reason);
});*/

const myPromise = new MyPromise((resolve, reject) => {
  resolve(1);
  reject(new Error("err"));
  // throw new Error("err");
});
console.log(myPromise);

