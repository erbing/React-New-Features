import React from "react";
import "./all.less";

var home = function() {
  this.name = "zg";
  this.age = 18;
};

var h1 = new home();
console.log(h1, "------ h1 ------");

var newF = fn => {
  var obj = {};
  obj.__proto__ = fn.prototype;
  fn.call(obj);

  return obj;
};

var h2 = newF(home);
console.log(h2, "------ h2 ------");

const Homes = () => {
  return 123;
};

export default Homes;
