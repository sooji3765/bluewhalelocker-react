import React, { Component } from 'react';
import ContractJson from '../../contracts/BwlERC20.json';
import BwlKlaytn from './BwlKlaytn';

class BwlERC20Klaytn extends Component {
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
  };

  getSummary = async () => {
    const { contract } = this.state;
    if (!this.state.cav) {
      return;
    }

    const totalSupply = await contract.methods.totalSupply().call();
    this.setState({ totalSupply: totalSupply })
  }

  render() {
    if (!this.state.cav) {
      return <div>Loading BwlERC20Klaytn ...</div>;
    }

    return (
      <div className=''>
        <div>The totalSupply value is: {this.state.totalSupply}</div>
      </div>
    );
  }
}

export default BwlERC20Klaytn;
