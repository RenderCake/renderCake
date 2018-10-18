import React, { Component } from "react";
import { css as emoCSS } from "emotion";

const css = (...args) => ({ className: emoCSS(...args) });
class App extends Component {
  render() {
    return (
      <div
        {...css({
          border: "solid 6px rgba(0,0,0,0.84)",
          padding: "2rem",
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        })}
      >
        <h1 {...css({ fontSize: "3rem" })}>Render Cake</h1>
        <p {...css({ fontFamily: "'Open Sans'", fontStyle: "italic" })}>
          something wicked this way comes
        </p>
      </div>
    );
  }
}

export default App;
