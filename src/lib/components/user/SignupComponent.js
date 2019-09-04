import React ,{ Component } from 'react';
import MyInfo from '../../info/MyInfo';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import PageMainComponent from '../default/PageMainComponent';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';

class SignupComponent extends Component{

    constructor(props) {
        super(props);
        this.handleSignIn = this.handleSignUp.bind(this);
      }

    handleSignUp = (e) => {
        e.preventDefault();
        MyInfo.setSignUp();
        window.location.href = "/";
    };

    render(){
        return (
           <>
           <div className="page-content header-clear-medium color-white">
           <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className="sign-page">
                <Avatar className="sign-avatar">
                    <LockOutlinedIcon />
                </Avatar>
                <Typography className="sign-title" component="h1" variant="h5">
                Sign up
                </Typography>
                <form  noValidate className="sign-form">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <TextField
                        autoComplete="fname"
                        name="Name"
                        variant="outlined"
                        required
                        fullWidth
                        id="Name"
                        label="Name"
                        autoFocus
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password check"
                        label="Password check"
                        type="password"
                        id="password-check"
                        autoComplete="current-password"
                    />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        style={{"margin":"10px auto"}}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="sign-btn-submit"
                        onClick={this.handleSignUp}
                    >
                        Sign Up
                    </Button>
                </Grid>
                <Grid container justify="center">
                    <Grid item>
                    <Link href="/login" variant="body2">
                        Already have an account? Sign in
                    </Link>
                    </Grid>
                </Grid>
                </form>
            </div>
            
            </Container>    
           </div>
           <PageMainComponent/>
           </>
        )
    }
}

export default SignupComponent