// 节流：
// 规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。

// 简单实现：
function throttle(fn, delay) {
  let timer = null;
  let starttime = Date.now();
  return function () {
    let curTime = Date.now(); // 当前时间
    let remaining = delay - (curTime - starttime); // 从上一次到现在，还剩下多少多余时间
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    if (remaining <= 0) {
      fn.apply(context, args);
      starttime = Date.now();
    } else {
      timer = setTimeout(fn, remaining);
    }
  };
}
// 比较完善的实现
function throttle2(handler, delay) {
  // 参数判断
  if (!(typeof handler === "function")) {
    throw new TypeError("handler must be a function");
  }
  if (typeof delay === "undefined") delay = 300;

  let previous = 0; // 上一次执行的时间

  let timer = null;

  return function (...args) {
    let self = this;

    // 当前执行时的时刻
    let now = new Date();
    let interval = now - previous; // 两次触发的时间间隔, 大于 delay 说明可以执行，小于delay 说明高频触发

    if (interval >= delay) {
      // 浏览器自动触发事件和节流函数触发事件时间点恰好相同时，需要清除定时器
      clearTimeout(timer);
      timer = null;
      handler.apply(self, ...args);
      previous = new Date();
    } else if (!timer) {
      // 有一个定时器后不需要再开启新的定时器

      // 开启定时器，让handler在 delay - interval 之后去执行,
      timer = setTimeout(() => {
        clearTimeout(timer); // 只是将系统中的定时器清除了，但是timer值还在
        timer = null;
        handler.apply(self, ...args);
        previous = new Date();
      }, delay - interval);
    }
  };
}
