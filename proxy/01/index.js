const man = {
  name: "yopox",
  age: 22,
};

const proxy = new Proxy(man, {
  get(target, prop) {
    if (!target[prop]) {
      throw Error(`Property "$(${prop})" does not exist`);
    }
    return target[prop];
  },
});
