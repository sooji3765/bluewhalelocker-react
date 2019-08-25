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
              <Card>
                <CardHeader>
                  header
                </CardHeader>
                <CardMedia/>
                <CardContent>
                    내용
                </CardContent>
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
