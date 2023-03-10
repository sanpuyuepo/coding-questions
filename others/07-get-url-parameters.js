/**
 * 获取当前url查询字符串中的参数
 *
 */
// for all browsers
const getQueryStringArgs = () => {
  let qs = location.search.length > 0 ? location.search.substring(1) : "";
  let args = {};

  for (let item of qs.split("&").map(kv => kv.split("="))) {
    let name = decodeURIComponent(item[0]);
    let value = decodeURIComponent(item[1]);

    if (name.length) {
      args[name] = value;
    }
  }
  return args;
};

// except IE
// use URLSearchParams
