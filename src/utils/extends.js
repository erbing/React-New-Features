import classA from "./class";

class A {
  constructor() {
    console.log(this, "---a---");
    // console.log(new.target.name); // new.target 指向当前正在执行的函数
  }
}

class B extends classA {
  constructor() {
    super();
    this.b = "b";
  }
  getB() {
    console.log(this.a, "----in b console.log(a)");
  }
}

export default B;
