import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/ConfigureStore";
import {Provider} from "react-redux";

import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";


import App from "./App";
import "./index.css";

export const store = configureStore();

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
