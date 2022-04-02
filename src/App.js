import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./Pages";
import MintPage from './Pages/mint.js';
import PostMintPage from './Pages/postmint.js'
import ErrorPage from "./Pages/error.js";
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import {store, persistor } from "./Redux/store.js"

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/mint' component={MintPage} exact />
            <Route path='/postmint' component={PostMintPage} exact />
            <Route path='*' component={ErrorPage} exact />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
