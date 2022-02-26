import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import * as remort from "AngularApp/HomeComponent";
import "./index.css";
import "zone.js"

const App = () => {
  const ref = React.useRef(null);

  useEffect(() => {
    const {mount} = remort;
    console.log("App.tsx", mount, remort);
    mount(ref.current);
  },[])

  return (
    <div className="container">
      <div>Name: ReactApp</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>

      <hr />
      <h1>Angular app</h1>
      <div ref={ref}></div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
