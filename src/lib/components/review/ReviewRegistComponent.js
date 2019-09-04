import React, { Component } from 'react';
import { FormControl, InputLabel ,Input,FormHelperText} from '@material-ui/core';
import {RouteComponentProps} from 'react-router-dom';

const ReviewRegistComponent = () =>{
    
    return (
        <>
            <div className="page-content header-clear-medium">
                
                <FormControl>
                    <InputLabel  htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>  
            </div>

        </>
    );
    
}

export default ReviewRegistComponent;