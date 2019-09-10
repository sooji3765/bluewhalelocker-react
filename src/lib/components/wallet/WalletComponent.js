import React ,{Component} from 'react'

class WalletComponent extends Component{

  state = {
    wallet: {
      address: process.env.REACT_APP_BAOBAB_EOA_0,
      ballance: 500,
      symbol: "BWL",
      contractAddress: "0x1111",
    },
    transactionList: [],
    showType: "summary",
  };

  constructor(props) {
    super(props);
    this.handleShowTypeSummary = this.handleShowTypeSummary.bind(this);
    this.handleShowTypeTxhash = this.handleShowTypeTxhash.bind(this);
    this.handleShowTypeSummaryTxhash = this.handleShowTypeSummaryTxhash.bind(this);
  }

  componentWillMount = () => {

    const testTransactionList = [
      { kind: "라커사용료", txhash: "0x554f43c75a924849653f727689af55fd2946b5b9e43066dfcfaf4cfcaf7fb5f2", blockNumber: "1111", time: "2019-09-08T05:40:20", fromAddress: "0x11", fromName: "Hong Git Dong", toAddress: "0x12", toName: "Kim", txType: "Service Chain", amount: "10", txFee: "0.01", },
      { kind: "라커사용료", txhash: "0x554f43c75a924849653f727689af55fd2946b5b9e43066dfcfaf4cfcaf7fb5f2", blockNumber: "1111", time: "2019-09-08T05:40:20", fromAddress: "0x11", fromName: "Hong Git Dong", toAddress: "0x12", toName: "Kim", txType: "Service Chain", amount: "10", txFee: "0.01", },
    ];

    this.setState({
        ...this.state,
        ...this.props,
        transactionList: testTransactionList,
    })
  }

  setShowType = (showType) => {
    this.setState({
      ...this.state,
      showType: showType,
    })
  }

  handleShowTypeSummary = (e) => {
    this.setShowType("summary");
  };

  handleShowTypeTxhash = (e) => {
    this.setShowType("txhash");
  };

  handleShowTypeSummaryTxhash = (e) => {
    this.setShowType("summaryTxhash");
  };

  render() {

    const { wallet, transactionList, showType } = this.state;

    console.log("showType", showType);
    return(
      <>
      <div className="page-content header-clear-medium color-white">
        <div className="locker-page">
          <div className = "add-locker-title">
              Wallet Info
          </div>

          <div className="add-locker-content">
            <h3 className="item-locker-num">Address : {wallet.address}</h3>
            <p>Ballance : {wallet.ballance}</p>
            <p>Symbol : {wallet.symbol}</p>
            <p>Contract Address : {wallet.contractAddress}</p>
          </div>

          <div className="add-locker-content">
            <span className="item-state" onClick={(e) => this.handleShowTypeSummary(e)}>summary</span>&nbsp;&nbsp;&nbsp;
            <span className="item-state" onClick={(e) => this.handleShowTypeTxhash(e)}>txhash</span>&nbsp;&nbsp;&nbsp;
            <span className="item-state" onClick={(e) => this.handleShowTypeSummaryTxhash(e)}>summary + txhash</span>
          </div>

          <div className="list-locker">
            <ul>
              {showType === 'summary' && 
                transactionList.map((item, index) => {
                  const txhash_href = process.env.REACT_APP_BAOBAB_TX_URL + "/" + item.txhash;
                  return (
                    <li key={index} className="list-item-locker">
                      <div>
                      <div className="item-locker-content">
                        <h3 className="item-locker-num">구분 : {item.kind}</h3>
                        <a target="_blank" href={txhash_href}>TX HASh : <span className="">{item.txhash}</span></a>
                        <p>TIME : <span className="">{item.time}</span></p>
                        <h4>보낸이 : <span className="">{item.fromName}</span></h4>
                        <h4>받은이 : <span className="">{item.toName}</span></h4>
                        <h4>AMOUNT(KLAY) : <span className="">{item.amount}</span></h4>
                        <h4>TX FEE(KLAY) : <span className="">{item.txFee}</span></h4>
                      </div>
                      </div>
                    </li>
                  )
                })
              }
              {showType === 'txhash' && 
                transactionList.map((item, index) => {

                  return (
                    <li key={index} className="list-item-locker">
                      <div onClick={(e)=>this.handleLockerItem(e,item)}>
                      <div className="item-locker-content">
                        <h3 className="item-locker-num">구분 : {item.kind}</h3>
                        <p>TX HASh : <span className="">{item.txhash}</span></p>
                        <p>BLOCK : <span className="">{item.blockNumber}</span></p>
                        <p>TIME : <span className="">{item.time}</span></p>
                        <p>FROM : <span className="">{item.fromAddress}</span></p>
                        <p>TO : <span className="">{item.toAddress}</span></p>
                        <h4>AMOUNT(KLAY) : <span className="">{item.amount}</span></h4>
                        <h4>TX FEE(KLAY) : <span className="">{item.txFee}</span></h4>
                      </div>
                      </div>
                    </li>
                  )
                })
              }
              {showType === 'summaryTxhash' && 
                transactionList.map((item, index) => {

                  return (
                    <li key={index} className="list-item-locker">
                      <div onClick={(e)=>this.handleLockerItem(e,item)}>
                      <div className="item-locker-content">
                        <h3 className="item-locker-num">구분 : {item.kind}</h3>
                        <p>TX HASh : <span className="">{item.txhash}</span></p>
                        <p>BLOCK : <span className="">{item.blockNumber}</span></p>
                        <p>TIME : <span className="">{item.time}</span></p>
                        <p>FROM : <span className="">{item.fromAddress}</span></p>
                        <h4>보낸이 : <span className="">{item.fromName}</span></h4>
                        <p>TO : <span className="">{item.toAddress}</span></p>
                        <h4>받은이 : <span className="">{item.toName}</span></h4>
                        <p>TX TYPE : <span className="">{item.txType}</span></p>
                        <h4>AMOUNT(KLAY) : <span className="">{item.amount}</span></h4>
                        <h4>TX FEE(KLAY) : <span className="">{item.txFee}</span></h4>
                      </div>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default WalletComponent;