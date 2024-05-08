import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./app/store";
import { Provider } from "react-redux";
import 'antd/dist/reset.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <Router>
      <Provider store={store}>
    {/* <React.StrictMode> */}
        <App/>
        </Provider>
    {/* </React.StrictMode> */}
    </Router>
);

