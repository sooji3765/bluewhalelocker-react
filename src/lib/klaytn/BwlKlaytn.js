import Caver from 'caver-js';
import MyInfo from '../info/MyInfo';

const BwlKlaytnInstance = async (networkUrl, contractJson) => {

  const cav = new Caver(networkUrl);
  const networkId = process.env.REACT_APP_BAOBAB_NETWORK_ID;
  const deployedNetwork = contractJson.networks[networkId];
  const contract = new cav.klay.Contract(contractJson.abi, deployedNetwork.address)

  const auth = (privateKey) => {
    if (cav.klay.accounts.wallet.length > 0) {
      return;
    }

    cav.klay.accounts.wallet.clear();

    const walletInstance = cav.klay.accounts.privateKeyToAccount(privateKey)
    cav.klay.accounts.wallet.add(walletInstance)

    sessionStorage.setItem('bwlWalletInstance', JSON.stringify(walletInstance))
  }

  const privateKey = process.env.REACT_APP_BAOBAB_EOA_PRIVATE_KEY_0;
  auth(privateKey);

  return {
    cav,
    contract,
  }
};

export default {
  BwlKlaytnInstance,
};
