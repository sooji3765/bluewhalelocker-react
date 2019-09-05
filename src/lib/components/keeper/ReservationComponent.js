import React, { Component } from "react";
import { Card, CardHeader,IconButton,CardMedia,Button,CardActions, CardContent,Typography} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
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
      this.setState({reservationItem : res.data.results});

      console.log(this.state.reservationItem);
    });
  }
  render() {

    return (
      
      <>
    {!this.state.selected &&
      <div className="page-content header-clear-medium">
         RESERVATION
          <ul className="reservation-content">
          {this.state.reservationItem.map((item,id) => 
            
             <Card key={id} style={{marginBottom : '10px'}}>
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
                   style={{height :'200px', marginBottom:'10px'}}
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
               {item.state==='inuse'?(
                  <CardActions>
                    <a
                      onClick={(e) => this.handleWrite(e, item)}
                      className="btn-write-review" 
                      to= {`/review/regist/${item.id}`}>
                      <i className="fas fa-pencil-alt"></i>review
                      </a>
                  </CardActions>)
                  :(<></>)
                }
             </Card>
        
          )}
          </ul>
        </div>}
        {this.state.selected &&
          <ReservationDetailComponent {...this.state.selected} ></ReservationDetailComponent>
        }         
      </>
    );
  }
}

export default ReservationComponent;
