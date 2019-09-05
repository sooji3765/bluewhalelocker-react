import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './App.css';
import BwlKlaytnContracts from "./lib/klaytn/BwlKlaytnContracts"
import MyInfo from "./lib/info/MyInfo";
import AddLockerComponent from "./lib/components/locker/AddLockerComponent"

const profile = MyInfo.getProfile("profile");

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
    <div className='sub_b'>
    <AddLockerComponent {...profile.state.lockerInfo}></AddLockerComponent>
    </div>
  </BrowserRouter>
  </div>
  </>
);

export default Root;
