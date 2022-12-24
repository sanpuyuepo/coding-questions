// 防抖：
// 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。

// 一个最简单的实现
function debounce(cb, delay) {
  let timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
    }, delay);
  };
}
