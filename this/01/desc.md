# 按顺序写出控制台打印结果(碧桂园 2020)

```javascript
var User = {
  count: 1,
  action: {
    getCount: function () {
      return this.count;
    },
  },
};

var getCount = User.action.getCount;

setTimeout(() => {
  console.log("result 1", User.action.getCount());
});

console.log("result 2", getCount());
```
