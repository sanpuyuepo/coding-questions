# 题目描述

已知如下对象，请基于 ES6 的 proxy 方法设计一个属性拦截读取操作的例子，
要求实现去访问目标对象 example 中不存在的属性时，抛出错误：Property "$(property)" does not exist (2018 字节跳动)

```javascript
const man = {
  name: 'jscoder',
  age: 22
}

const proxy = new Proxy(...)

proxy.name // 'jscoder'
proxy.age // 22
proxy.location // Property "$(property)" does not exist
```
