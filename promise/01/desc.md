# 题目描述

在 url 数组中存放了 10 个接口地址，同时定义了以 loadData 函数，该函数接收一个 url 参数，返回一个 Promise 对象，该 Promise 对象在接口调用成功时返回 resolve，失败时返回 reject

要求: 任意时刻，同时下载的链接数量不超过 3 个。
试写出一段代码实现这个需求，要求尽可能快速的将所有接口中的数据得到

```javascript
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
```
