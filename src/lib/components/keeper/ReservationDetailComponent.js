import React, { Component } from 'react';
import { Card , Grid,Button} from "@material-ui/core";
import Moment from 'react-moment';
class ReservationDetailComponent extends Component {

    constructor(props) {
        super(props);
        
        this.setState({
            ...props
        });
    }

    handleBack = () =>{
        window.location.href='/reservationList';
    }

    render() {
        return (
           <>
           <div className="page-content header-clear-medium color-white">
                <div class="books">
                    <div className="booking-page">
                        <h1 className="booking-page-title">Thank You for Booking!</h1>
                    </div>
                    <Card className="booking-ticket">
                        <div className="ticket-picture">
                            <img className="qrcode_img" src="../img/qrcode.png" alt="qrocde"/>
                            <p className="qr_text">CP2431N23</p>
                        </div>
                        <div className="ticket-info">
                            <div className="ticket-txt">
                                <h3 className="ticket-title">{this.props.name}</h3>
                                <p className="ticket-address"><i className="fas fa-map-marker-alt"></i>{this.props.address}</p>

                                <Grid container className="ticket-detail">
                                    <Grid item xs={6}>
                                        <p className="detail_p">Reservation Date</p>
                                        <p className="detail_p_in">
                                        <Moment format="YYYY-MM-DD">{this.props.use_date}</Moment>
                                        </p>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p className="detail_p">Order Date</p>
                                        <p className="detail_p_in">
                                        <Moment format="YYYY-MM-DD">{this.props.order_date}</Moment>
                                        </p>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p className="detail_p">Locker Size</p>
                                        <p className="detail_p_in">{this.props.size}</p>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <p className="detail_p">Locker State</p>
                                        <p className="detail_p_in">{this.props.state}</p>
                                    </Grid>

                                </Grid>    
                            </div>
                        </div>
                    </Card>
                </div>
           </div>
           </>
        );
    }
}

export default ReservationDetailComponent;