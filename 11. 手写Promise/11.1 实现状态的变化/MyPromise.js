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
    if (this.#status === PromiseStatus.PENDING) {
      this.#status = PromiseStatus.FULFILLED;
    }
    console.log(this.#status);
    return this;
  }

  reject(reason) {
    if (this.#status === PromiseStatus.PENDING) {
      this.#status = PromiseStatus.REJECTED;
    }
    // console.log(reason);
    this.#reason = reason
    console.log(this.#status);
    return this;
  }

  then(onFulfilled) {
    onFulfilled(this.#data)
    return this;
  }

  catch(onRejected) {
    try {
      onRejected(this.#reason)
    } catch (err) {

    }
    return this;
  }

}

const promise = new Promise((resolve, reject) => {
  reject(new Error('err'));
}).then((data) => {
  console.log(data);
}).catch((reason) => {
  console.log(reason);
});

const myPromise = new MyPromise((resolve, reject) => {
  // resolve(1);
  reject(new Error('err'));
}).then((data) => {
  console.log(data);
}).catch(reason => {
  console.log(reason);
})

