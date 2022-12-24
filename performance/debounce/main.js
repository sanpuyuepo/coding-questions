// 防抖：
// 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。

// 1. 一个最简单的实现: 不考虑回调函数传参的情况
function debounce(cb, delay) {
  let timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
    }, delay);
  };
}

// 2.一个简单的实现：考虑回调传参的情况
function debounce2(cb, delay) {
  let timer = null;
  return function (...args) {
    let self = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb.call(self, ...args);
    }, delay);
  };
}

// 一个复杂的实现: 多次触发的时候，考虑立即触发还是最后一次触发
/**
 *
 * @param {*} cb 回调函数
 * @param {*} delay 触发后等待时间
 * @param {*} immediate 执行第一次触发还是最后一次触发
 * @returns
 */
function debounce3(cb, delay, immediate) {
  // 参数判断
  if (typeof cb !== "function")
    throw new TypeError("handler must be an function");
  if (typeof delay === "undefined") delay = 300;
  if (typeof delay === "boolean") {
    immediate = delay;
    delay = 300;
  }
  if (typeof immediate !== "boolean") immediate = false;

  // 防抖
  let timer = null;
  return function (...args) {
    let self = this;
    // 针对最后一次触发，要清除上一次触发的定时器
    clearTimeout(timer);

    // 立即执行第一次触发，timer 为 null
    let triggerFirst = immediate && !timer;

    // 不管是不是执行第一次触发，这里都要执行
    timer = setTimeout(() => {
      // 如果是执行第一次触发，当执行完后，这里的timer是有值的，
      // 需要置null, 才能在下一次触发时正确判断triggerFirst条件(其实这里设置之后，上面可以不用clearTimeout了)
      timer = null;
      // 执行最后一次触发
      if (!immediate) cb.call(self, ...args);
    }, delay);

    // 执行第一次触发
    if (triggerFirst) cb.call(self, ...args);
  };
}
