import React from "react";
import ReactDom from "react-dom";

import { Switch, Route, Link } from "react-router-dom";

import Index from "./router/index";
import Home from "./router/home";
import My from "./router/my";
import Animation from "./router/animation";

import classA from "./utils/class";
import classB from "./utils/extends";

// const instanceA = new classA();
// console.log(instanceA, "---getA---");

const instanceB = new classB();
console.log(instanceB.getA(), "---instanceB1---");
console.log(instanceB.getB(), "---instanceB2---");

const GetBaidu = props => {
  let children = props.children;
  let _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?ccb0e8f10ba18ccb5041e8aa48068c1b";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();
  return children;
};

const App = () => {
  return (
    <div>
      <h2>测试百度统计代码</h2>
      <h3>
        <Link to={"/"}>Index</Link>
      </h3>
      <h3>
        <Link to={"/home"}>Home</Link>
      </h3>
      <h3>
        <Link to={"/my"}>my</Link>
      </h3>
      <h3>
        <Link to={"/animation"}>animation</Link>
      </h3>

      <Switch>
        <GetBaidu>
          <Route exact path="/" component={Index} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/my" component={My} />
          <Route exact path="/animation" component={Animation} />
        </GetBaidu>
      </Switch>
    </div>
  );
};

export default App;
