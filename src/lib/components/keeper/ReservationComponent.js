import React, { Component } from "react";
import { Card, CardHeader,IconButton,CardMedia, CardContent,Typography} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import axios from "axios";
import Moment from 'react-moment';
import ReservationDetailComponent from './ReservationDetailComponent';

class ReservationComponent extends Component {

  state = {
    reservationItem: [],
    selected : null
  };

  handleClick= (e,item) =>{
    //  window.location.href="/reservation/result/"+item.id;
    e.preventDefault();
    this.setState({
      selected : item
    }) 
  }

  componentDidMount() {
    axios.get("http://localhost:8080/reviews/list").then(res =>{
      console.log(res.data[0]);
      this.setState({reservationItem : res.data[0]});

      console.log(this.state.reservationItem);
    });
  }
  render() {

    return (
      <>
      {!this.state.selected &&
      <div className="page-content header-clear-medium">
        <div>
          
          <ul className="reservation-content">
          {this.state.reservationItem.map((item,id) => 
             <li className="reservation_item" key={id}>
             <Card >
               <CardHeader
                 avatar={
                   <Avatar aria-label="recipe">
                     <img src="../img/user1.png" alt="img" style={{width:"40px"}}/>
                   </Avatar>
                 }
                 action={
                   <IconButton aria-label="settings">
                     <MoreVertIcon 
                      onClick={(e)=>this.handleClick(e,item)}
                     />
                   </IconButton>
                 }
                 title={item.name}
                 subheader={item.order_date}
               />
               <CardContent>
 
               <CardMedia
                   style={{height :'200px', "margin-bottom":'10px'}}
                   image={item.image1}
                   title="Paella dish"
                 />  
                 <Typography variant="body2" color="textSecondary" component="p">
                   <Grid container>
                     <Grid item xs={4}>
                     <i className="far fa-calendar-alt"></i> Use Date      
                     </Grid>
                     <Grid item xs={8}>
                     <Moment format="YYYY-MM-DD">{item.use_date}</Moment>
                     </Grid>
                   </Grid>
               
                   <Grid container>
                     <Grid item xs={4}>
                     <i className="fas fa-suitcase-rolling"></i> Locker Size
                     </Grid>
                     <Grid item xs={8}>
                     {item.size}
                     </Grid>
                   </Grid>
 
                   <Grid container>
                     <Grid item xs={4}>
                     <i className="fas fa-check-circle"></i> State 
                     </Grid>
                     <Grid item xs={8}>
                     {item.state} 
                     </Grid>
                   </Grid>
                 </Typography>
               </CardContent>
             </Card>
             </li>  
          )}
          </ul>
        </div>
      </div>
      }
      {this.state.selected &&
        <ReservationDetailComponent {...this.state.selected}></ReservationDetailComponent>
      }
      </>
    );
  }
}

export default ReservationComponent;
