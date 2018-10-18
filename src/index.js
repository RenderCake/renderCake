import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { injectGlobal } from "emotion";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

injectGlobal`
    body {
        font-family: 'Pacifico', cursive;
        font-size: 16px;
        color: rgba(0,0,0,0.84);
    }

    * {
        box-sizing: border-box;
    }
`;
