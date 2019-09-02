import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './App.css';
import BwlKlaytnContracts from "./lib/klaytn/BwlKlaytnContracts"

const Root = () => (
  <>
  <div className='root'>
  <BrowserRouter>
    <div className='sub_a'>
    <App />
    </div>
    <div className='sub_b'>
    <BwlKlaytnContracts/>
    </div>
  </BrowserRouter>
  </div>
  </>
);

export default Root;
