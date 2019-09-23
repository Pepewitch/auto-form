import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { store } from "redux/store";
import { Router } from "react-router";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import firebase from "firebase";
import { ScreenSizeProvider } from "features/size/ScreenSizeProvider";
import { Routes } from "features/routes/Routes";

const history = createBrowserHistory();

const config = {
  apiKey: "AIzaSyDwDhp3oELhfYqCooeWMMb5ooJW1qnh3Uk",
  authDomain: "auto-form-d81c5.firebaseapp.com",
  databaseURL: "https://auto-form-d81c5.firebaseio.com",
  projectId: "auto-form-d81c5",
  storageBucket: "auto-form-d81c5.appspot.com",
  messagingSenderId: "827567164559",
  appId: "1:827567164559:web:a103f7edd073c0d1d634fa"
};
firebase.initializeApp(config);

const App: React.FC = () => {
  return (
    <ScreenSizeProvider>
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    </ScreenSizeProvider>
  );
};

export default App;
