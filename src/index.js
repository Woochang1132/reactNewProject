import React from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css";
import reportWebVitals from "./reportWebVitals";
//import AppClass from "./AppClass";
import App from "./App";
// import AppTheme from "./AppTheme";

// import AppWrap from "./AppWrap";
// import AppForm from "./AppForm";
// import AppMentorsImmer from "./AppMentorsImmer";
// import AppMentors from "./AppMentors";
// import AppXY from "./AppXY";
// import AppProfile from "./AppProfile";
// import AppCounter from "./AppCounter";
// import AppProducts from "./AppProducts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
