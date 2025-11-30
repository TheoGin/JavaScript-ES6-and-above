// 向某位女生发送一则表白短信
// name: 女神的姓名
// 该函数返回一个任务对象
function sendMessage(name) {
  return new Promise((resolve, reject) => {
    // 模拟 发送表白短信
    console.log(
      `邓哥 -> ${name}：最近有谣言说我喜欢你，我要澄清一下，那不是谣言😘`
    );
    console.log(`等待${name}回复......`);
    // 模拟 女神回复需要一段时间
    setTimeout(() => {
      // 模拟 有10%的几率成功
      if (Math.random() <= 0.1) {
        // 成功，调用 resolve，并传递女神的回复
        resolve(`${name} -> 邓哥：我是九，你是三，除了你还是你😘`);
      } else {
        // 失败，调用 reject，并传递女神的回复
        reject(`${name} -> 邓哥：你是个好人😜`);
      }
    }, 1000);
  });
}

/*
// 错误写法
sendMessage("李建刚")
  .catch((reason) => {
    console.log("失败", reason);
    // throw sendMessage("王富贵");
    return sendMessage("王富贵");
  })
  .catch((reason) => {
    console.log("失败", reason);
    // throw sendMessage("周聚财");
    return sendMessage("周聚财");
  })
  .catch((reason) => {
    console.log("失败", reason);
    // throw sendMessage("刘人勇");
    return sendMessage("刘人勇");
  })
  .catch((reason) => {
    return "邓哥命犯天煞孤星，注定孤独终老！！";
  })
  .then((data) => {
    console.log(data);
  });*/

sendMessage("李建刚")
  .catch(reason => {
    console.log('失败', reason);
    return sendMessage('王富贵')
  })
  .catch(reason => {
    console.log('失败', reason);
    return sendMessage('周聚财')
  })
  .catch(reason => {
    console.log('失败', reason);
    return sendMessage('刘人勇')
  })
  .then(
    data => {
      console.log(data)
      console.log('邓哥终于找到了自己的伴侣')
    },
    reason => {
      console.log(reason)
      console.log('邓哥命犯天煞孤星，注定孤独终老！！')
    }
  );




