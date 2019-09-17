import React, { Component } from 'react';
import BwlKlaytn from './BwlKlaytn';

class LockerBwlKlaytn extends Component {
  state = { cav: null, contract: null };

  componentDidMount = async () => {
    try {
 
      const instance = await BwlKlaytn.getWallet();
      
      this.setState({
        cav: instance.cav,
        active_address: instance.active_address,
        contract: instance.instanceLocker,
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
    const { contract, active_address } = this.state;

    if (!this.state.cav) {
      return;
    }

    const getHello = await contract.methods.getHello().call();
    this.setState({ getHello: getHello });
  }

  setMessage = async (_id, _name, _message) => {
    const { cav, contract, active_address } = this.state;

    if (!this.state.cav)
      return;

    const func = 'setMessage';
    const resEstimateGas = await contract.methods.setHello(_id, cav.utf8ToHex(_name), _message).estimateGas({ from: active_address })
    await contract.methods.setHello(_id, cav.utf8ToHex(_name), _message).send({ from: active_address, gas: resEstimateGas * 2 })
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
    const { contract, active_address } = this.state;

    if (!this.state.cav)
      return;
      
    const func = 'setMessage';
    const resEstimateGas = await contract.methods.setHello(hello).estimateGas({ from: active_address })
    await contract.methods.setHello(hello).send({ from: active_address, gas: resEstimateGas * 2 })
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
