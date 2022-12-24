/**
 * 写一个方法去掉字符串中的空格
 */

function trimStrSpace(str) {
  return str.split(" ").join("");
}

console.log(trimStrSpace(" i am yopox ~~~ ! "));
