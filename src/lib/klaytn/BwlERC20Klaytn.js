import React, { Component } from 'react';
import BwlKlaytn from './BwlKlaytn';

class BwlERC20Klaytn extends Component {
  state = { cav: null, contract: null };

  componentDidMount = async () => {
    try {
 
      const instance = await BwlKlaytn.getWallet();
      
      this.setState({
        cav: instance.cav,
        active_address: instance.active_address,
        contract: instance.instanceBwlERC20,
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
  };

  getSummary = async () => {
    const { contract, active_address } = this.state;
    if (!this.state.cav) {
      return;
    }

    const contractAddress = await contract._address;
    const name = await contract.methods.name().call();
    const symbol = await contract.methods.symbol().call();
    const decimals = await contract.methods.decimals().call();
    const totalSupply = await contract.methods.totalSupply().call();

    const constructerAddress = await contract.methods.constructer().call();
    const constructerBalance = await contract.methods.balanceOf(constructerAddress).call();

    this.setState({
      contractAddress: contractAddress,
      name: name,
      symbol: symbol,
      decimals: decimals,
      totalSupply: totalSupply,
      constructerAddress: constructerAddress,
      constructerBalance: constructerBalance,
    })
  }

  render() {
    if (!this.state.cav) {
      return <div>Loading BwlERC20Klaytn ...</div>;
    }

    return (
      <div className=''>
        <div>contractAddress : {this.state.contractAddress}</div>
        <div>name : {this.state.name}</div>
        <div>symbol : {this.state.symbol}</div>
        <div>decimals : {this.state.decimals}</div>
        <div>constructer address : {this.state.constructerAddress}</div>
        <div>constructer balance : {this.state.constructerBalance}</div>
      </div>
    );
  }
}

export default BwlERC20Klaytn;
