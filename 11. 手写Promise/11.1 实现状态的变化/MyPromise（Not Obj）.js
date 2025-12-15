const PromiseStatus = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

class MyPromise {

  // 私有
  #status = "";
  #data;
  #reason;

  constructor(executor) {
    this.#status = PromiseStatus.PENDING;
    console.log(this.#status);
    executor(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve(data) {
    console.log(this);
    this.#data = data
    this.#status = PromiseStatus.FULFILLED;
    console.log(this.#status);
    Object.freeze(this.#status)
    return this;
  }

  reject(reason) {
    this.#status = PromiseStatus.REJECTED;
    this.#reason = reason
    Object.freeze(this.#status)
    console.log(this.#status);
  }

  then(onFulfilled) {
    onFulfilled(this.#data)
  }


}

new Promise((resolve, reject) => {
  resolve(1);
}).then((data) => {
  console.log(data);
});

const myPromise = new MyPromise((resolve, reject) => {
  resolve(1);
  reject(1);
});
console.log(myPromise.then);
