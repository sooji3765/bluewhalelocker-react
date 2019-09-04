import React ,{Component} from 'react'
import LockerItemComponent from './LockerItemComponent';

class AddLockerComponent extends Component{

    state = {
        selected: null
      };
    
    handleLockerItem = (e, item) => {
        e.preventDefault();
        this.setState({
            selected: item
        });
    };

    render() {

        const lockerList = [
            {
                locker_number : '0001',
                size : 'Large',
                state : 'using',
                score : '3.2'
            },
            {
                locker_number : '0002',
                size : 'Small',
                state : 'empty',
                score : '3.2'
            },
            {
                locker_number : '0003',
                size : 'Large',
                state : 'using',
                score : '3.2'
            },
            {
                locker_number : '0004',
                size : 'Large',
                state : 'disable',
                score : '3.2'
            },
            {
                locker_number : '0005',
                size : 'Small',
                state : 'using',
                score : '3.2'
            },{
                locker_number : '0006',
                size : 'Medium',
                state : 'using',
                score : '4.0'
            },
            {
                locker_number : '0007',
                size : 'Large',
                state : 'using',
                score : '1.2'
            }
        ]

        return(
            <>
            {!this.state.selected &&
            <div className="page-content header-clear-medium color-white">
                <div className="locker-page">
                    <div className = "add-locker-title">
                        My Locker List
                    </div>

                    <div className="add-locker-content">
                        <a href="/input_locker" className="add-btn-locker">Add Locker</a>
                    </div>

                    <div className="list-locker">
                        <ul>
                            {
                                lockerList.map((item,locker_number)=>
                                <li key={locker_number} className="list-item-locker">
                                <a href="/locker_item" onClick={(e)=>this.handleLockerItem(e,item)}>
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
                                </a>
                                </li>    
                            )}
                            
                        </ul>
                    </div>
                </div>
            </div>
            }{this.state.selected &&
                <LockerItemComponent></LockerItemComponent>
            }    
            </>
        )
    }
}

export default AddLockerComponent;