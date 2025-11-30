// 做饭
function cook() {
  return new Promise((resolve, reject) => {
    console.log("邓哥打开了电饭煲");
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("饭已ok");
      } else {
        reject("做饭却忘了加水，米饭变成了爆米花");
      }
    }, 2000);
  });
}

// 洗衣服
function wash() {
  return new Promise((resolve, reject) => {
    console.log("邓哥打开了洗衣机");
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("衣服已经洗好");
      } else {
        reject("洗衣服时停水了，洗了个寂寞");
      }
    }, 2500);
  });
}

// 打扫卫生
function sweep() {
  return new Promise((resolve, reject) => {
    console.log("邓哥打开了扫地机器人");
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("地板扫的非常干净");
      } else {
        reject("扫地机器人被哈士奇一爪掀翻了");
      }
    }, 3000);
  });
}

// 为了最大程度的节约时间，邓哥希望这些任务同时进行，最终汇总结果统一处理
/*Promise.all([cook(), wash(), sweep()])
  .then(value => {
    console.log(value)
  })
  .catch(reason => {
    console.log(reason)
  })*/
// 汇总结果，而不是有一个错误就不汇报

// 邓哥需要在所有任务结束后给邓嫂汇报工作，哪些成功了，哪些失败了
Promise.allSettled([cook(), wash(), sweep()]).then((result) => {
  console.log(
    result
      .map((item) => (item.status === "fulfilled" ? item.value : item.reason))
      .join("；result")
  );
});
/*
邓哥打开了电饭煲
邓哥打开了洗衣机
邓哥打开了扫地机器人
饭已ok；result衣服已经洗好；result扫地机器人被哈士奇一爪掀翻了
* */
