import React from 'react';
import { createStore } from 'redux';
import rootReducer from './lib/store/modules';
import { Provider } from 'react-redux';
import App from './App';

import './App.css';
import BwlKlaytnContracts from "./lib/klaytn/BwlKlaytnContracts"
// import AddLockerComponent from "./lib/components/locker/AddLockerComponent"
import OrderTestComponent from "./lib/components/wallet/OrderTestComponent"

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

const Root = () => {
  return (
    <>
    <div className='root'>
      <div className='sub_a'>
        <Provider store={store}>
          <App />
        </Provider>
      </div>
      {/* <div className='sub_b'>
        <BwlKlaytnContracts/>
      </div> */}
      <div className='sub_b'>
        <OrderTestComponent></OrderTestComponent>
      </div>
    </div>
    </>
  )
};

export default Root;
