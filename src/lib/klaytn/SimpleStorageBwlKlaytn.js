import React, { Component } from 'react';
import ContractJson from '../../contracts/SimpleStorage.json';
import BwlKlaytn from './BwlKlaytn';

class SimpleStorageBwlKlaytn extends Component {
  state = { cav: null, contract: null };

  componentDidMount = async () => {
    try {
 
      const networkUrl = process.env.REACT_APP_BAOBAB_API_URL;
      const contract = await BwlKlaytn.BwlKlaytnInstance(networkUrl, ContractJson);
      
      this.setState({
        ...contract,
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
    const { contract } = this.state;
    if (!this.state.cav) {
      return;
    }

    const get = await contract.methods.get().call();
    this.setState({ get: get })
  }

  set = async (value) => {
    const { contract } = this.state;

    const func = 'set';
    const resEstimateGas = await contract.methods.set(value).estimateGas({ from: process.env.REACT_APP_BAOBAB_EOA_0 })
    await contract.methods.set(value).send({ from: process.env.REACT_APP_BAOBAB_EOA_0, gas: resEstimateGas * 2 })
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
        <div>The stored value is: {this.state.get}</div>
      </div>
    );
  }
}

export default SimpleStorageBwlKlaytn;
