import Caver from 'caver-js';
import BwlERC20ContractJson from '../../contracts/BwlERC20.json';
import LockerContractJson from '../../contracts/Locker.json';
import SimpleStorageContractJson from '../../contracts/SimpleStorage.json';

class BwlKlaytn {

  instance = {};
  WEIGHT_GAS = 2;

  constructor(props) {
    console.log("constructor BwlKlaytn");

    const bwlWallet = sessionStorage.getItem("bwlWallet");
    if (bwlWallet) {
      this.setWallet(bwlWallet);
    }
  }

  setWallet = async (privateKey) => {

    this.instance = {};

    const networkUrl = process.env.REACT_APP_BAOBAB_API_URL;
    const cav = new Caver(networkUrl);
    cav.klay.accounts.wallet.clear();

    const networkId = process.env.REACT_APP_BAOBAB_NETWORK_ID;
    const instanceBwlERC20 = this.newInstanceBwlERC20(cav, networkId);
    const instanceLocker = this.newInstanceLocker(cav, networkId);
    const instanceSimpleStorage = this.newInstanceSimpleStorage(cav, networkId);
  
    const walletInstance = cav.klay.accounts.privateKeyToAccount(privateKey)
    cav.klay.accounts.wallet.add(walletInstance)

    sessionStorage.setItem("bwlWallet", privateKey);

    const active_address = cav.klay.accounts.wallet[0].address;
    this.instance = {
      cav,
      active_address: active_address,
      instanceBwlERC20,
      instanceLocker,
      instanceSimpleStorage,
    }

    return this.instance;
  };

  getWallet = async () => {
    return this.instance;
  }

  removeWallet = () => {
    if (this.instance) {
      const cav = this.instance.cav;
      cav.klay.accounts.wallet.clear();

      this.instance = {}
    }
  }

  newInstanceBwlERC20 = (cav, networkId) => {
    const deployedNetwork = BwlERC20ContractJson.networks[networkId];
    const contract = new cav.klay.Contract(BwlERC20ContractJson.abi, deployedNetwork.address);
    return {
      ...contract
    }
  }
  
  newInstanceLocker = (cav, networkId) => {
    const deployedNetwork = LockerContractJson.networks[networkId];
    const contract = new cav.klay.Contract(LockerContractJson.abi, deployedNetwork.address)
    return {
      ...contract
    }
  }
  
  newInstanceSimpleStorage = (cav, networkId) => {
    const deployedNetwork = SimpleStorageContractJson.networks[networkId];
    const contract = new cav.klay.Contract(SimpleStorageContractJson.abi, deployedNetwork.address)
    return {
      ...contract
    }
  }

  getBwlERC20 = () => {
    const state = {
      cav: this.instance.cav,
      active_address: this.instance.active_address,
      contract: this.instance.instanceBwlERC20,
    };
    return state;
  }
  
  // 라커 예약
  setOrderReserved = async (user, keeper, amount, charge) => {
    const { contract, active_address } = this.getBwlERC20();

    let orderTxhash = '';
    const func = 'orderReserved';
    const resEstimateGas = await contract.methods.orderReserved(user, keeper, amount, charge).estimateGas({ from: active_address })
    await contract.methods.orderReserved(user, keeper, amount, charge).send({ from: active_address, gas: resEstimateGas * this.WEIGHT_GAS })
      .once('transactionHash', (txHash) => {
        console.log(func, 'txHash', txHash)
        orderTxhash = txHash;
      })
      .once('receipt', (receipt) => {
        console.log(func, 'receipt', receipt)
      })
      .once('error', (error) => {
        console.log(func, 'error', error)
      })

    return orderTxhash;
  };

  // 결제 및 사용
  setOrderInuse = async (user, keeper, amount, charge, orderTxhash) => {
    const { contract, active_address } = this.getBwlERC20();

    const func = 'orderInuse';
    const resEstimateGas = await contract.methods.orderInuse(user, keeper, amount, charge, orderTxhash).estimateGas({ from: active_address })
    await contract.methods.orderInuse(user, keeper, amount, charge, orderTxhash).send({ from: active_address, gas: resEstimateGas * this.WEIGHT_GAS })
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

  // 예약없이 바로 결제
  setOrderDirectInuse = async (user, keeper, amount, charge) => {
    const { contract, active_address } = this.getBwlERC20();

    const func = 'orderDirectInuse';
    const resEstimateGas = await contract.methods.orderDirectInuse(user, keeper, amount, charge).estimateGas({ from: active_address })
    await contract.methods.orderDirectInuse(user, keeper, amount, charge).send({ from: active_address, gas: resEstimateGas * this.WEIGHT_GAS })
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

  // 사용됨, 사용가능 상태
  setOrderUsed = async (user, keeper, amount, charge, orderTxhash) => {
    const { contract, active_address } = this.getBwlERC20();

    const func = 'orderUsed';
    const resEstimateGas = await contract.methods.orderUsed(user, keeper, amount, charge, orderTxhash).estimateGas({ from: active_address })
    await contract.methods.orderUsed(user, keeper, amount, charge, orderTxhash).send({ from: active_address, gas: resEstimateGas * this.WEIGHT_GAS })
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

  setOrderRewardChargeType = async (keeper, amount, charge, orderTxhash) => {
    const { contract, active_address } = this.getBwlERC20();

    const func = 'orderRewardChargeType';
    const resEstimateGas = await contract.methods.orderRewardChargeType(keeper, amount, charge, orderTxhash).estimateGas({ from: active_address })
    await contract.methods.orderRewardChargeType(keeper, amount, charge, orderTxhash).send({ from: active_address, gas: resEstimateGas * this.WEIGHT_GAS })
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

  // 라커 상태
  getOrderStatus = async (value) => {
    const { contract, active_address } = this.getBwlERC20();

    const func = 'orderStatus';
    const res = await contract.methods.orderStatus(value).call();
    console.log(func, 'res', res);
  };
}

let singletonInstance;

if (!singletonInstance) {
  singletonInstance = new BwlKlaytn();
}

export default singletonInstance;
