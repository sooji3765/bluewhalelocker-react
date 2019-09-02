import React, { Component } from 'react';
import ContractJson from '../../contracts/Locker.json';
import BwlKlaytn from './BwlKlaytn';

class LockerBwlKlaytn extends Component {
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
    await this.setHello('hello4');
  };

  getSummary = async () => {
    const { contract } = this.state;

    if (!this.state.cav) {
      return;
    }

    const getHello = await contract.methods.getHello().call();
    this.setState({ getHello: getHello });
  }

  setMessage = async (_id, _name, _message) => {
    const { cav, contract } = this.state;

    const func = 'setMessage';
    const resEstimateGas = await contract.methods.setHello(_id, cav.utf8ToHex(_name), _message).estimateGas({ from: process.env.REACT_APP_BAOBAB_EOA_0 })
    await contract.methods.setHello(_id, cav.utf8ToHex(_name), _message).send({ from: process.env.REACT_APP_BAOBAB_EOA_0, gas: resEstimateGas * 2 })
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

  setHello = async (hello) => {
    const { contract } = this.state;

    const func = 'setMessage';
    const resEstimateGas = await contract.methods.setHello(hello).estimateGas({ from: process.env.REACT_APP_BAOBAB_EOA_0 })
    await contract.methods.setHello(hello).send({ from: process.env.REACT_APP_BAOBAB_EOA_0, gas: resEstimateGas * 2 })
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
      return <div>Loading LockerBwlKlaytn ...</div>;
    }

    return (
      <div className=''>
        <div>The getHello value is: {this.state.getHello}</div>
      </div>
    );
  }
}

export default LockerBwlKlaytn;
