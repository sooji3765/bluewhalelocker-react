import React, { Component } from "react";
import { Card, CardHeader,IconButton,CardMedia,Button,CardActions, CardContent,Typography} from "@material-ui/core";
import axios from "axios";
import Moment from 'react-moment';
import ReservationDetailComponent from './ReservationDetailComponent';

class ReservationComponent extends Component {
 
  constructor(props) {
    super(props);
    this.handleWrite = this.handleWrite.bind(this)
  }
  state = {
    reservationItem: [],
    selected :null
  };

  handleClick = (e,item) =>{
    e.preventDefault();
    this.setState({
      selected : item
    }) 
  }

  handleWrite = (e,item) =>{
    e.preventDefault();
    this.props.handleReviewWrite({props: this.props, e, item, selectComponent: 'ReviewRegistComponent'});
  }

  componentDidMount() {
    axios.get("http://localhost:8080/order/list").then(res =>{
      console.log(res.data.results);
      this.setState({reservationItem : res.data.results[0]});

      console.log(this.state.reservationItem);
    });
  }

 
  render() {

   
    return (
      
      <>
    {!this.state.selected &&
      <div className="page-content header-clear-medium">
       
          <div className="list-items">
          {this.state.reservationItem.map((item,id) => 
            
            <Card key={item.id} className="list-item" onClick={(e)=>this.handleClick(e,item)}>
              <div className="item-contents">
             
                <CardContent className="item-content">
                  <Typography variant="subtitle1">
                    {item.name}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    {item.order_date}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    <span class="span-size">{item.size}</span>|<span class="span-state">{item.state}</span>
                  </Typography>
                </CardContent>
                {item.state==='used'?(
                <CardActions>
                <Button 
                 onClick={(e)=>this.handleWrite(e,item)}
                size="small" 
                color="primary">
                  Write
                </Button>
              </CardActions>)
               :(<></>)}
              </div>
              <CardMedia
                className="img_thumb"
                image={item.image1}
                title="Live from space album cover"
              />
          </Card>
         
          )}
          </div>
        </div>}
        {this.state.selected &&
          <ReservationDetailComponent {...this.state.selected} ></ReservationDetailComponent>
        }         
      </>
    );
  }
}

export default ReservationComponent;
