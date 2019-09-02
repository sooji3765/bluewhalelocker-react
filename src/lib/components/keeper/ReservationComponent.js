import React, { Component } from "react";
import { Card, CardHeader,IconButton,CardMedia, CardContent,Typography, CardActions, Button } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
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
                <CardMedia
                  className="media-img"
                  image="/img/store1.jpg"
                  title="store1"
                  />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Store Name
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Reservation Time
                </Typography>
                  </CardContent>
                <CardActions>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                    <Button size="small" color="primary">GO Check</Button>
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
