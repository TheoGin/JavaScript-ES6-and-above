function sendMessage(name, onFulfilled, onRejected) {
  console.log(
    `邓哥 -> ${name}：最近有谣言说我喜欢你，我要澄清一下，那不是谣言😘`
  );
  console.log(`等待${name}回复……`);
  setTimeout(() => {
    if (Math.random() <= 0.1) {
      onFulfilled(`${name} -> 邓哥：我是九，你是三，除了你还是你😘`);
    } else {
      onRejected(`${name} -> 邓哥：你是好人😜`);
    }
  }, 1000);
}

// 邓哥的女神一共有4位，名字分别是：李建国、王富贵、周聚财、刘人勇
// 稳妥起见，邓哥决定使用串行的方式进行表白：先给第1位女神发送短信，然后等待女神的回应，如果成功了，就结束，如果失败了，则再给第2位女神发送短信，依次类推
sendMessage(
  "李建刚",
  (reply) => {
    console.log("成功", reply);
  },
  (reply) => {
    console.log("失败", reply);
    sendMessage(
      "王富贵",
      (reply) => {
        console.log("成功", reply);
      },
      (reply) => {
        console.log("失败", reply);
        sendMessage(
          "周聚财",
          (reply) => {
            console.log("成功", reply);
          },
          (reply) => {
            console.log("失败", reply);
            sendMessage(
              "刘人勇",
              (reply) => {
                console.log("成功", reply);
              },
              (reply) => {
                console.log("失败", reply);
              }
            );
          }
        );
      }
    );
  }
);
