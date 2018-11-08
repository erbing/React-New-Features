import React from "react";
import ReactDom from "react-dom";

import Index from "./src/index";
import { BrowserRouter } from "react-router-dom";

ReactDom.render(
  <BrowserRouter>
    <Index />
  </BrowserRouter>,
  document.getElementById("apps")
);
