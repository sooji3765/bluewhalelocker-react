import React, { Component } from 'react';
import ReviewList from "../review/ReviewList";
import axios from "axios";
import MyInfo from '../../info/MyInfo';

class KeeperReviewComponent extends Component {
    state = {
        reviewItems: []
    };

    componentDidMount() {
        const rememberMe = MyInfo.getRememberMe();
        const email = rememberMe.email;
        console.log(email);
        axios.get(`http://localhost:8080/review/keeper/list?email=${email}`).then(res => {
            console.log(res);
            this.setState({ reviewItems: res.data.results });
        });
    }
    render() {
        return (
            <>
               <div className="page-content header-clear-medium">
                <div className="keeper-review">
                    <div className="review-titles">KEEPER REVIEW</div>
                    <ul className="review-cotent">
                        <ReviewList reviewItems={this.state.reviewItems}></ReviewList>
                    </ul>
                 </div>
                 </div>
            </>
        );
    }
}

export default KeeperReviewComponent;