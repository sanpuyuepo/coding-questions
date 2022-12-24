/**
 * 去除字符串中最后一个指定字符
 */

function removeLastChar(str, target) {
  const index = str.lastIndexOf(target);
  // method 1:
  // const arr = str.split("");
  // arr.splice(index, 1);
  // return arr.join("");

  // method 2:
  return str.substring(0, index) + str.substring(index + 1, str.length);
}

const ret = removeLastChar(
  "~Hi, My name is yopox? how are you?~~~test???",
  "e"
);
console.log(ret);
