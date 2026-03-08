/* class Temperature {

 }

 const temperature = new Temperature();
 console.log(temperature.valueOf()); // Temperature {}
 console.log(temperature.valueOf().toString()); // [object Object]     字符串
 console.log(temperature + 123); // [object Object]123
 console.log(temperature * 123); // NaN */
class Temperature {
  constructor(degree) {
    this.degree = degree;
  }

  // 该知名符号会影响类型转换的结果
  [Symbol.toPrimitive](type) {
    switch (type) {
      case "default":
        return this.degree + "摄氏度";
      case "number":
        return this.degree;
      case "string":
        return this.degree + "℃";
    }
  }
}

const temperature = new Temperature(30);

// 1. type: default
console.log(temperature + '！'); // 30摄氏度！

// 2. type: number
console.log(temperature / 2); // 15

// 3. type: string
console.log(String(temperature)); // 30℃

