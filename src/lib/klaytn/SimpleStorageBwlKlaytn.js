import React, { Component } from 'react';
import ContractJson from '../../contracts/SimpleStorage.json';
import BwlKlaytn from './BwlKlaytn';

class SimpleStorageBwlKlaytn extends Component {
  state = { cav: null, contract: null };

  componentDidMount = async () => {
    try {
 
      const instance = await BwlKlaytn.getWallet();
      
      this.setState({
        cav: instance.cav,
        active_address: instance.active_address,
        contract: instance.instanceSimpleStorage,
       }, this.runExample);
    } catch (error) {
      console.error(error);
    }
  };

  componentWillUnmount() {
    if (this.intervalId) clearInterval(this.intervalId)
  }  

  runExample = async () => {
    this.intervalId = setInterval(this.getSummary, 1000)
    await this.set(21);
  };

  getSummary = async () => {
    const { cav, contract, active_address } = this.state;
    if (!this.state.cav) {
      return;
    }

    const get = await contract.methods.get().call();
    const getBlockNumber = await cav.klay.getBlockNumber();
    this.setState({
      get: get,
      getBlockNumber: getBlockNumber
    })
  }

  set = async (value) => {
    const { contract, active_address } = this.state;
    if (!this.state.cav)
      return;

    const func = 'set';
    const resEstimateGas = await contract.methods.set(value).estimateGas({ from: active_address })
    await contract.methods.set(value).send({ from: active_address, gas: resEstimateGas * 2 })
      .once('transactionHash', (txHash) => {
        console.log(func, 'txHash', txHash)
      })
      .once('receipt', (receipt) => {
        console.log(func, 'receipt', receipt)
      })
      .once('error', (error) => {
        console.log(func, 'error', error)
      });
  };

  render() {
    if (!this.state.cav) {
      return <div>Loading SimpleStorageBwlKlaytn ...</div>;
    }

    return (
      <div className=''>
        <div>The get value is: {this.state.get}</div>
        <div>The getBlockNumber value is: {this.state.getBlockNumber}</div>
      </div>
    );
  }
}

export default SimpleStorageBwlKlaytn;
