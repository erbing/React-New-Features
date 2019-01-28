import React, { useState, useEffect } from "react";
import "./all.less";

const Index = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API.
    document.title = `You clicked ${count} times`;

    let __requestAnimatioFram = window.requestAnimationFrame;
    let timer = null;
    let dom = document.getElementById("box1");
    let dom2 = document.getElementById("box2");
    let move = 0;

    timer && cancelAnimationFrame(timer);

    const animationFn = () => {
      if (move < 360) {
        move++;
      } else {
        move = 0;
      }
      dom.style.transform = `rotateZ(${move}deg) translateZ(0)`;
      dom2.style.transform = `rotateZ(${-move}deg) translateZ(0)`;
      timer = __requestAnimatioFram(animationFn);
    };
    timer = __requestAnimatioFram(animationFn);
  });

  return (
    <div>
      <h2 className="index">This is animation page</h2>
      <div id="MySignature">欢迎推荐，欢迎 star</div>

      <div id="MySignature">Count: {count}</div>
      <div className="box" id="box1" onClick={() => setCount(count + 1)} />
      <div className="box" id="box2" onClick={() => setCount(count + 2)} />
    </div>
  );
};

export default Index;
