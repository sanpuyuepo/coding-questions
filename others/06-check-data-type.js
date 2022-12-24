/**
 * 判断数据类型
 */

function checkDataType(data) {
  // Ojbect.protoype.toString() 返回表示对象的字符串
  return Object.prototype.toString.call(data);
}

console.log(checkDataType("yopox"));
console.log(checkDataType(123));
console.log(checkDataType(null));
console.log(checkDataType(undefined));
console.log(checkDataType(() => {}));
console.log(checkDataType([]));
console.log(checkDataType({}));
console.log(checkDataType(new Date()));
console.log(checkDataType(new RegExp()));
console.log(checkDataType(Symbol()));
