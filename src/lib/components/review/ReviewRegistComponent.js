import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import StarRatingComponent from 'react-star-rating-component';
import Grid from '@material-ui/core/Grid';
import {Container} from '@material-ui/core';
import axios from 'axios';

class ReviewRegistComponent extends Component{
  
    state = {
        title : '',
        content : '',
        rating : 3
    }

    onStarClick=(nextValue, prevValue, name)=> {
        this.setState({rating: nextValue});
    }

    handleChange = e =>{

        this.setState({
           [e.target.id] : e.target.value
        })
    }

    handleSubmit = e =>{
        
        axios.post('http://localhost:8080/review/regist',{
           
            content : this.state.title+this.state.content,
            user_id : 2 ,
            keeper_id : 1 ,
            locker_id: 7 ,
            user_email : 'woom@naver.com' ,  
            score : this.state.rating
        }).then(res => {
            if(res.data.success){
                window.location.href="/reservationList";
            }
        }).catch(error =>{
            console.log('failed',error);
        })
    }

    handleCancel = () =>{
        window.location.href="/reservationList";
    }
  

    render(){
    return (
        <>
            <div className="page-content header-clear-medium">
                
            <Container component="main">
            <CssBaseline />
            <div className="sign-page">
               
                <form onSubmit={this.handleSubmit} noValidate className="review-form">
                
                <Grid container spacing={2}>
                   
                    <Grid item xs={12}>
                        <TextField
                            onChange={this.handleChange}
                            value ={this.state.title}
                            autoComplete="fname"
                            name="name"
                            variant="outlined"
                            required
                            fullWidth
                            id="title"
                            label="TITLE"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            multiline
                            onChange={this.handleChange}
                            value={this.state.content}
                            rows="8"
                            id="content"
                            label="Content"
                            name="content"
                            
                        />
                    </Grid>
                    </Grid>
                    <Grid container justify="center">
                   
                    <StarRatingComponent 
                        className="star-size"
                        name="rate1" 
                        starCount={5}
                        value={this.state.rating}
                        onStarClick={this.onStarClick}
                        />
                    
                    </Grid>
                    <Grid container className="btn-margin">
                    <Grid item xs={12} justify="center">
                        <Button 
                            type="submit"
                            variant="outlined" 
                            fullWidth>
                            submit
                        </Button>
                    </Grid>
                   
                    </Grid>
                    <Grid container justify="center">
                        <Button 
                        onClick = {this.handleCancel}
                        className="btn-margin"
                        fullWidth 
                        color="secondary"
                        >cancel</Button>
                    </Grid>
                
                </form>
            </div>
            
            </Container>    
            </div>

        </>
    );
    }
}

export default ReviewRegistComponent;