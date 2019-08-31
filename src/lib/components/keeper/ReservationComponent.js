import React, { Component } from "react";
import { Card, CardHeader, CardMedia, CardContent, CardActions, Button } from "@material-ui/core";

class ReservationComponent extends Component {

  render() {

    

    return (
      <>
      <div className="page-content header-clear-medium">
        <div>
          <div className="reservation-list-title">
            RESERVATION LIST
          </div>
          <ul className="reservation-content">
            <li className="reservation_item">
              <Card style={{minHeight:'200px'}}>
                <CardHeader
                style={{fontSize : '14px'}}
                title="Store1"
                subheader="September 14, 2019"
                />

                <CardMedia
                  className="media-img"
                  image="/img/store1.jpg"
                  title="store1"
                  />
                <CardActions>
                    <Button size="small">예약 내역 확인하기</Button>
                </CardActions>
              </Card>
            </li>
            <li className="reservation_item">
              <Card style={{minHeight:'200px'}}>
                <CardHeader
                style={{fontSize : '14px'}}
                title="Store2"
                subheader="September 14, 2019"
                />

                <CardMedia
                  className="media-img"
                  image="/img/store1.jpg"
                  title="store1"
                  />
                <CardActions>
                    <Button size="small">예약 내역 확인하기</Button>
                </CardActions>
              </Card>
            </li>
            <li className="reservation_item">
              <Card style={{minHeight:'200px'}}>
                <CardHeader
                style={{fontSize : '14px'}}
                title="Store1"
                subheader="September 14, 2019"
                />

                <CardMedia
                  className="media-img"
                  image="/img/store1.jpg"
                  title="store1"
                  />
                <CardActions>
                    <Button size="small">예약 내역 확인하기</Button>
                </CardActions>
              </Card>
            </li>
            <li className="reservation_item">
              <Card style={{minHeight:'200px'}}>
                <CardHeader
                style={{fontSize : '14px'}}
                title="Store3"
                subheader="September 14, 2019"
                />

                <CardMedia
                  className="media-img"
                  image="/img/store1.jpg"
                  title="store1"
                  />
                <CardActions>
                    <Button size="small">예약 내역 확인하기</Button>
                </CardActions>
              </Card>
            </li>
          </ul>
        </div>
      </div>
      </>
    );
  }
}

export default ReservationComponent;
