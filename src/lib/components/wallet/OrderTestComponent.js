import React ,{Component} from 'react';
import BwlKlaytnContracts from '../../klaytn/BwlKlaytnContracts';
import BwlKlaytn from '../../klaytn/BwlKlaytn';
import BwlUtil from '../../utils/BwlUtil';
import MyInfo from '../../info/MyInfo';
import './OrderTestComponent.css';

class OrderTestComponent extends Component{

  state = {
    regist: {
      req: {},
      res: {},
    },
    update: {
      req: {},
      res: {},
    },
    list: {
      req: {},
      res: {},
    },
    search: {
      req: {
        col: "user"
      },
      res: {},
    },
    detail: {
      req: {},
      res: {},
    },
  }

  constructor(props) {
    super(props);

    this.handleRegistReq = this.handleRegistReq.bind(this);
    this.handleUpdateReq = this.handleUpdateReq.bind(this);
    this.handleListReq = this.handleListReq.bind(this);
    this.handleSearchReq = this.handleSearchReq.bind(this);
    this.handleDetailReq = this.handleDetailReq.bind(this);

    this.handleClickRegist = this.handleClickRegist.bind(this);
    this.handleClickUpdate = this.handleClickUpdate.bind(this);
    this.handleClickList = this.handleClickList.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);
    this.handleClickDetail = this.handleClickDetail.bind(this);
  }

  componentWillMount = () => {
  }


  //////////////////////////////////////////////////////////////////////////////
  // 테스트 준비 데이터

  testList = [
    {
      title: "테스트 100",
      list: [
        {
          caption: "T 101",
          number: 101,
        },
        {
          caption: "T 102",
          number: 101,
        },
        {
          caption: "T 103",
          number: -1,
        },
        {
          caption: "T 104",
          number: -1,
        },
        {
          caption: "T 105",
          number: -1,
        },
        {
          caption: "T 106",
          number: -1,
        },
      ],
    },
    {
      title: "테스트 200",
      list: [
        {
          caption: "T 201",
          number: -1,
        },
        {
          caption: "T 202",
          number: -1,
        },
        {
          caption: "T 203",
          number: -1,
        },
        {
          caption: "T 204",
          number: -1,
        },
        {
          caption: "T 205",
          number: -1,
        },
        {
          caption: "T 206",
          number: -1,
        },
      ],
    },
  ];

  handleTest = (e, testNumber) => {
    e.preventDefault();
    // user_id, locker_id, keeper_id, state, order_date, use_date, price`
    const data = [
      [ 101, '','','','reserved' ,'','','' ],
      [ 102, '','','','inuse' ,'','','' ],
      [ 103, 3,1,1,'reserved' ,'2019-08-31 01:05:45','2019-09-01',1000 ],
      [ 104, 3,1,1,'inuse'    ,'2019-08-31 01:05:45','2019-09-01',1000 ],
      [ 105, 3,1,1,'used'     ,'2019-08-31 01:05:45','2019-09-01',1000 ],

      [ 201, 1,3,2,'inuse'   ,'2019-08-31 01:06:41','2019-09-02',3000 ],
      [ 202, 2,1,1,'used'    ,'2019-08-31 01:08:35','2019-08-30',1000 ],
    ]

    const test = data.map((item, index) => {
      return {test_id: item[0], user_id: item[1], locker_id: item[2], keeper_id: item[3], state: item[4], order_date: item[5], use_date: item[6], price: item[7], charge: true}
    });

    console.log("test", test);

    let testIdx = 0;
    if (testNumber >= 101 && testNumber <= 199) {
      testIdx = testNumber - 101;
    }

    console.log("testIdx", testNumber, testIdx);

    const item = test[testIdx];

    let kind = "regist";
    if (item.state === 'reserved') {
      kind = "regist";
    } else if (item.state === 'inuse') {
      kind = "update";
    } else if (item.state === 'used') {
      kind = "update";
    }
    this.setState({
      ...this.state,
      [kind]: {
        ...this.state[kind],
        req: {
          ...item
        }
      }
    });

  }

  //////////////////////////////////////////////////////////////////////////////
  // 처리요청 데이터
  isOneOfResults = (list) => {
    if (!list || !list.results || list.results.length !== 1) {
      return false;
    }

    return true;
  }

  getAddress = async (id) => {
    const address_list = await BwlUtil.doBwlGetData('/user/' + id, {});
    if (!this.isOneOfResults(address_list)) {
      return null;
    }

    const privateKey = address_list.results[0].wallet;

    const account = BwlKlaytn.instance.cav.klay.accounts.privateKeyToAccount(privateKey);
    return account.address;
  }

  doRegist = async (item) => {

    const user_address = await this.getAddress(item.user_id);
    const keeper_address = await this.getAddress(item.keeper_id);
    const order_txhash = await BwlKlaytn.setOrderReserved(user_address, keeper_address, item.price, true);

    const item2 = {
      ...item,
      order_txhash: order_txhash
    }
    const { success, results, message } = await BwlUtil.doBwlPostData('/order/regist', item2);
    if (success === true) {
      return {
        order_txhash: results,
        message: message,
      }
    }

    return {
      message: message
    };
  }

  doUpdate = async (item) => {

    const detail = await BwlUtil.doBwlGetData('/order/' + item.order_id, {});
    if (!detail.success) {
      return {
        message: '에러'
      };
    }

    if (!this.isOneOfResults(detail)) {
      return null;
    }

    const order = detail.results[0];
    const user_address = await this.getAddress(order.user_id);
    const keeper_address = await this.getAddress(order.keeper_id);

    await BwlKlaytn.setOrderInuse(user_address, keeper_address, order.price, true, order.order_txhash);

    const item2 = {
      ...item,
      id: item.order_id,
      price: order.price,
    }
    const { success, results, message } = await BwlUtil.doBwlPostData('/order/update', item2);
    if (success === true) {
      return {
        message: message,
      }
    }

    return {
      message: message
    };
  }

  doList = async (item) => {
    const { success, results, message } = await BwlUtil.doBwlGetData('/order/list', item);
    if (success === true) {
      return results;
    }

    return {
      message: message
    };
  }

  doSearch = async (item) => {
    const { success, results, message } = await BwlUtil.doBwlGetData('/order/search', item);
    if (success === true) {
      return results;
    }

    return {
      message: message
    };
  }

  doDetail = async (item) => {
    const { success, results, message } = await BwlUtil.doBwlGetData('/order/' + item.order_id, {});
    if (success === true) {
      return results;
    }

    return {
      message: message
    };
  }

  //////////////////////////////////////////////////////////////////////////////
  // 입력

  handleReq = (e, kind, name) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [kind]: {
        ...this.state[kind],
        req: {
          ...this.state[kind].req,
          [name]: value,
        }
      }
    });
  }

  handleRegistReq = (e, name) => {
    this.handleReq(e, "regist", name);
  }

  handleUpdateReq = (e, name) => {
    this.handleReq(e, "update", name);
  }

  handleListReq = (e, name) => {
    this.handleReq(e, "list", name);
  }

  handleSearchReq = (e, name) => {
    this.handleReq(e, "search", name);
  }

  handleDetailReq = (e, name) => {
    this.handleReq(e, "detail", name);
  }

  //////////////////////////////////////////////////////////////////////////////
  // 처리결과

  handleRes = (kind, results) => {
    this.setState({
      ...this.state,
      [kind]: {
        ...this.state[kind],
        res: {
          ...results,
        }
      }
    });
  }  

  //////////////////////////////////////////////////////////////////////////////
  // 처리요청 이벤트

  handleProcClick = async (e, doProc, resSucc) => {
    e.preventDefault();

    const form = BwlUtil.findParentForm(e.target);

    if (form) {
        const item = BwlUtil.getFormData(e, form);
        const results = await doProc(item);
        if (results) {
          console.log('results', results);
          resSucc(results);
        } else {
          console.log('handleProcClick', '처리 실패');
        }
    } else {
      console.log('not found form tag');
    }
  }

  handleClickRegist = async (e) => {
    this.handleRes("regist", {});
    await this.handleProcClick(e, this.doRegist, (results) => {
      this.props.handleOrderRegist({props: this.props, e, item: results});
      this.handleRes("regist", results);
    });
  }

  handleClickUpdate = async (e) => {
    this.handleRes("update", {});
    await this.handleProcClick(e, this.doUpdate, (results) => {
      this.props.handleOrderUpdate({props: this.props, e, item: results});
      this.handleRes("update", results);
    });
  }

  handleClickList = async (e) => {
    this.handleRes("list", {});
    await this.handleProcClick(e, this.doList, (results) => {
      this.handleRes("list", results);
    });
  }

  handleClickSearch = async (e) => {
    this.handleRes("search", {});
    await this.handleProcClick(e, this.doSearch, (results) => {
      this.handleRes("search", results);
    });
  }

  handleClickDetail = async (e) => {
    this.handleRes("detail", {});
    await this.handleProcClick(e, this.doDetail, (results) => {
      this.handleRes("detail", results);
    });
  }

  render() {

    const { regist, update, list, search, detail} = this.state;
    const clsLeft = "cls_left";

    return(
      <>
      <div className="page-content header-clear-medium color-white">
        <div className="locker-page">
          <div className = "add-locker-title">
              Order Bar
          </div>
          <div className="add-locker-content">
          </div>
          <div className="add-locker-content">
            <BwlKlaytnContracts {...this.state} />
          </div>
          {/* {
            this.testList.map((item, index) => {
              return (
                <>
                  <div key={index} className="add-locker-content">
                    {item.title}
                    <div>
                      {
                        item.list.map((itemSub, indexSub) => {
                          return <button key={indexSub} className={clsLeft} onClick={(e) => this.handleTest(e, 101)}>{itemSub.caption}</button>
                        })
                      }
                  </div>
                  </div>
                </>
              )
            })
          } */}
          <div className="add-locker-content">
            테스트 100
            <div>
              <button className={clsLeft} onClick={(e) => this.handleTest(e, 103)}>T 101</button>
              <button className={clsLeft} onClick={(e) => this.handleTest(e, 104)}>T 102</button>
              <button className={clsLeft} onClick={(e) => this.handleTest(e, 105)}>T 103</button>
              {/* <button className={clsLeft} onClick={(e) => this.handleTest(e, 104)}>T 104</button>
              <button className={clsLeft} onClick={(e) => this.handleTest(e, 105)}>T 105</button>
              <button className={clsLeft} onClick={(e) => this.handleTest(e, 106)}>T 106</button> */}
            </div>
          </div>
          {/* <div className="add-locker-content">
          테스트 200
            <div>
              <button className={clsLeft} onClick={(e) => this.handleTest(e, 201)}>T 201</button>
              <button className={clsLeft} onClick={(e) => this.handleTest(e, 202)}>T 202</button>
              <button className={clsLeft} onClick={(e) => this.handleTest(e, 203)}>T 203</button>
              <button className={clsLeft} onClick={(e) => this.handleTest(e, 204)}>T 204</button>
              <button className={clsLeft} onClick={(e) => this.handleTest(e, 205)}>T 205</button>
              <button className={clsLeft} onClick={(e) => this.handleTest(e, 206)}>T 206</button>
            </div>
          </div> */}
          <div className="add-locker-content">
            regist
            <form>
              <div><span className={clsLeft}>user_id : </span><input type="text" name="user_id" value={regist.req.user_id} onChange={(e) => this.handleRegistReq(e, "user_id")} /></div>
              <div><span className={clsLeft}>locker_id : </span><input type="text" name="locker_id" value={regist.req.locker_id} onChange={(e) => this.handleRegistReq(e, "locker_id")} /></div>
              <div><span className={clsLeft}>keeper_id : </span><input type="text" name="keeper_id" value={regist.req.keeper_id}  onChange={(e) => this.handleRegistReq(e, "keeper_id")}/></div>
              <div><span className={clsLeft}>col : </span><select name="state" value={regist.req.state} onChange={(e) => this.handleRegistReq(e, "state")} >
                <option value=""></option>
                <option value="reserved">reserved</option>
                <option value="inuse">inuse</option>
              </select></div>
              <div><span className={clsLeft}>order_date : </span><input type="text" name="order_date" value={regist.req.order_date} onChange={(e) => this.handleRegistReq(e, "order_date")} /></div>
              <div><span className={clsLeft}>use_date : </span><input type="text" name="use_date" value={regist.req.use_date} onChange={(e) => this.handleRegistReq(e, "use_date")} /></div>
              <div><span className={clsLeft}>price : </span><input type="text" name="price" value={regist.req.price} onChange={(e) => this.handleRegistReq(e, "price")} /></div>
              <button className={clsLeft} onClick={(e) => this.handleClickRegist(e)}>요청</button>
              <button className={clsLeft} onClick={(e) => this.handleTest(e, 101)}>Clear</button>
            </form>
          </div>
          <div className="add-locker-content">
            updtate
            <form>
              <div><span className={clsLeft}>order_id : </span><input type="text" name="order_id" value={update.req.order_id} onChange={(e) => this.handleUpdateReq(e, "order_id")} /></div>
              <div><span className={clsLeft}>col : </span><select name="state" value={update.req.state} onChange={(e) => this.handleUpdateReq(e, "state")} >
                <option value=""></option>
                <option value="reserved">reserved</option>
                <option value="inuse">inuse</option>
                <option value="used">used</option>
              </select></div>
              <div><span className={clsLeft}>order_date : </span><input type="text" name="order_date" value={update.req.order_date} onChange={(e) => this.handleUpdateReq(e, "order_date")} /></div>
              <div><span className={clsLeft}>use_date : </span><input type="text" name="use_date" value={update.req.use_date} onChange={(e) => this.handleUpdateReq(e, "use_date")} /></div>
              <button className={clsLeft} onClick={(e) => this.handleClickUpdate(e)}>요청</button>
              <button className={clsLeft} onClick={(e) => this.handleTest(e, 102)}>Clear</button>
            </form>
          </div>
          <div className="add-locker-content">
            list
            <form>
            <div><span className={clsLeft}>order_id : </span><input type="text" name="order_id" value={list.req.order_id} onChange={(e) => this.handleListReq(e, "order_id")} /></div>
              <button className={clsLeft} onClick={(e) => this.handleClickList(e)}>조회</button>
            </form>
          </div>
          <div className="add-locker-content">
            search(리뷰 검색 데이터)
            <form>
              <div><span className={clsLeft}>id : </span><input type="text" name="id" value={search.req.id} onChange={(e) => this.handleSearchReq(e, "id")} /></div>
              <div><span className={clsLeft}>col : </span><select name="col" value={search.req.col} onChange={(e) => this.handleSearchReq(e, "col")} >
                <option value="user">user</option>
                <option value="keeper">keeper</option>
                <option value="locker">locker</option>
              </select></div>
              <button className={clsLeft} onClick={(e) => this.handleClickSearch(e)}>조회</button>
            </form>
          </div>
          <div className="add-locker-content">
            id(리뷰 상세 데이터)
            <form>
              <div><span className={clsLeft}>order_id : </span><input type="text" name="order_id" value={detail.req.order_id} onChange={(e) => this.handleDetailReq(e, "order_id")} /></div>
              <button className={clsLeft} onClick={(e) => this.handleClickDetail(e)}>조회</button>
            </form>
          </div>
          <div className="add-locker-content">
            state
            <div><span className={clsLeft}>regist : </span><p>{JSON.stringify(regist)}</p></div>
            <div><span className={clsLeft}>update : </span><p>{JSON.stringify(update)}</p></div>
            <div><span className={clsLeft}>list : </span><p>{JSON.stringify(list)}</p></div>
            <div><span className={clsLeft}>search : </span><p>{JSON.stringify(search)}</p></div>
            <div><span className={clsLeft}>detail : </span><p>{JSON.stringify(detail)}</p></div>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default OrderTestComponent;