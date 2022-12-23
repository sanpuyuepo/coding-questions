function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}

// 封装promise定时器
function timer(cb, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cb();
      resolve();
    }, time);
  });
}

// function main() {
//   timer(green, 1000)
//     .then(() => {
//       return timer(yellow, 2000);
//     })
//     .then(() => {
//       return timer(red, 3000);
//     })
//     .then(() => {
//       console.log("******************");
//       main();
//     });
// }

// 更简单的写法：
async function main() {
  await timer(green, 1000);
  await timer(yellow, 2000);
  await timer(red, 3000);
  main();
}

main();
