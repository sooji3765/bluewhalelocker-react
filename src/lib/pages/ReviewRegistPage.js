import React, { Component } from 'react';
import HeaderComponent from '../components/default/HeaderComponent';
import ReviewRegistComponent from '../components/review/ReviewRegistComponent';
import FooterComponent from '../components/default/FooterComponent';

class ReviewRegistPage extends Component {
    render() {
        return (
            <div>
                <HeaderComponent title={'REVIEW WRITE'}></HeaderComponent>
                <ReviewRegistComponent></ReviewRegistComponent>
                <FooterComponent path="/reservationList"></FooterComponent>
            </div>
        );
    }
}

export default ReviewRegistPage;