/**
 * 写一个方法将下划线命名转成驼峰命名
 */

function underscore2Camel(variable) {
  if (!variable.includes("_")) return variable;
  variable = variable.replaceAll("_", " ").trim(" ").split(" ");
  // first charactor must be lowercase, index from 1
  for (let i = 1; i < variable.length; i++) {
    let str = variable[i];
    str = str[0].toUpperCase() + str.substring(1, str.length);
    variable.splice(i, 1, str);
  }
  return variable.join("");
}

const variable = "_asdf_ef_change_ii_";
// const variable = "asdf_ef_change_ii_";
// const variable = "asdf_ef_change_ii";
// const variable = "t_estaaaaa";

console.log(underscore2Camel(variable));
