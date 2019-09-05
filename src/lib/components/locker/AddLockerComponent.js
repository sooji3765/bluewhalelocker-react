import React ,{Component} from 'react'

class AddLockerComponent extends Component{

    state = {
    };

    constructor(props) {
        super(props);
        this.handleInputLocker = this.handleInputLocker.bind(this);
        this.handleLockerItem = this.handleLockerItem.bind(this);
    }

    componentDidMount = () => {
        this.setState({
            ...this.props
        })
    }

    handleInputLocker = (e) => {
        e.preventDefault();
        this.props.handleUpdateState({props: this.props, e, selectComponent: 'InputLockerComponent'});
    };

    handleLockerItem = (e, item) => {
        e.preventDefault();
        this.props.handleLockerItem({props: this.props, e, item, selectComponent: 'LockerItemComponent'});
    };

    render() {

        const { lockerList } = this.props.lockerInfo;

        return(
            <>
            <div className="page-content header-clear-medium color-white">
                <div className="locker-page">
                    <div className = "add-locker-title">
                        My Locker List
                    </div>

                    <div className="add-locker-content">
                        <button className="add-btn-locker" onClick={(e)=>this.handleInputLocker(e)}>Add Locker</button>
                    </div>

                    <div className="list-locker">
                        <ul>
                            {
                                lockerList.map((item,locker_number)=>
                                <li key={locker_number} className="list-item-locker">
                                <div onClick={(e)=>this.handleLockerItem(e,item)}>
                                <div className="item-locker-content">
                                    <h3 className="item-locker-num">락커 넘버 : {item.locker_number}</h3>
                                    <p>락커 사이즈 : {item.size}</p>
                                    <p>락커 사용 상태 : <span className="item-state">{item.state}</span></p>
                                    <p className="item-locker-score"> <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>    
                                    <span className="item-score">{item.score}/5.0</span>
                                    </p>
                                </div>
                                </div>
                                </li>    
                            )}
                            
                        </ul>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default AddLockerComponent;