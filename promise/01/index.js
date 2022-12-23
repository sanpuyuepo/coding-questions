var urls = [
  "http://jsonplaceholder.typicode.com/posts/1",
  "http://jsonplaceholder.typicode.com/posts/2",
  "http://jsonplaceholder.typicode.com/posts/3",
  "http://jsonplaceholder.typicode.com/posts/4",
  "http://jsonplaceholder.typicode.com/posts/5",
  "http://jsonplaceholder.typicode.com/posts/6",
  "http://jsonplaceholder.typicode.com/posts/7",
  "http://jsonplaceholder.typicode.com/posts/8",
  "http://jsonplaceholder.typicode.com/posts/9",
  "http://jsonplaceholder.typicode.com/posts/10",
];

function loadData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.responseText);
    };
    xhr.open("GET", url);
    xhr.send();
  });
}

/**
 * 思路：
 * 1. 先并发请求3个url
 * 2. 当其中一条请求得到数据后，立即请求一条新的请求
 * 3. 保持并发数为3，
 * 具体：
 * 1. 并发请求X个url，得到X个promise，合并为一个数组
 * 2. 对数组调用Promise.race, 返回最先改变状态的一个promise
 * 3. 将最先完成的promise从数组删除，添加下一个新的promise，保持数组长度不变，直到所有url被取完
 * 4. 使用Promise.all 处理状态没有改变的promise
 */

// solution：

/**
 *
 * @param {*} urls
 * @param {*} handler
 * @param {*} limit
 * @param {*} arr 保存返回的数据
 * @returns
 */
function limitLoad(urls, handler, limit, arr) {
  // 复制数组
  const sequence = [...urls];
  // 并发数组，存储最大并发数请求
  let promises = [];

  // splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组，返回由被删除的元素组成的一个数组。此方法会改变原数组。
  // map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
  // array.map(callbackFn(currentValue, index, array)):

  promises = sequence.splice(0, limit).map((url, index) => {
    return handler(url).then(res => {
      arr.push(res);
      // 返回索引以实现新promise替换已完成的promise
      return index;
    });
  });

  // reduce() 方法对数组中的每个元素按序执行一个由您提供的 reducer 函数，
  // 每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。

  // 第一次执行回调函数时，不存在“上一次的计算结果”。如果需要回调函数从数组索引为 0 的元素开始执行，则需要传递初始值。
  // 否则，数组索引为 0 的元素将被作为初始值 initialValue，迭代器将从第二个元素开始执行（索引为 1 而不是

  // reducer函数（callbackFn）参数：
  // -- previousValue 上一次调用 callbackFn 时的返回值。在第一次调用时，若指定了初始值 initialValue，其值则为 initialValue，否则为数组索引为 0 的元素 array[0]
  // -- currentValue 数组中正在处理的元素。在第一次调用时，若指定了初始值 initialValue，其值则为数组索引为 0 的元素 array[0]，否则为 array[1]
  // -- currentIndex 数组中正在处理的元素的索引。若指定了初始值 initialValue，则起始索引号为 0，否则从索引 1 起始
  // -- array 用于遍历的数组

  // 对剩余的url:
  return sequence
    .reduce((previousValue, url, currentIndex) => {
      return previousValue
        .then(() => {
          // 获取并发数组中最先改变状态的promise, promise返回其在并发数组中的索引
          return Promise.race(promises);
        })
        .then(index => {
          // 根据索引，替换最快改变状态的promise
          promises[index] = handler(sequence[currentIndex]).then(res => {
            arr.push(res);
            return index;
          });
        })
        .catch(err => {
          console.log(err);
        });
    }, Promise.resolve())
    .then(() => {
      return Promise.all(promises);
    });
}

// limitLoad(urls, loadData, 3);

// test
(async function () {
  const arr = [];
  const res = await limitLoad(urls, loadData, 3, arr);
  console.log(arr);
  console.log(res);
})();
