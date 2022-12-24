/**
 * 字符串大小写切换
 */
// ASCII A-Z: 65-90 a-z: 97-122
// 正则？
function toggleCase(str) {
  return str
    .split("")
    .map(item => {
      return item.charCodeAt() > 96 ? item.toUpperCase() : item.toLowerCase();
    })
    .join("");
}

// 正则式：
function convertCase(str) {
  return str.replace(/([a-z]*)([A-Z]*)/g, (m, s1, s2) => {
    return `${s1.toUpperCase()}${s2.toLowerCase()}`;
  });
}

console.log(toggleCase("abCDEfGedIhg"));
console.log(toggleCase("AbcDefgHKl"));
