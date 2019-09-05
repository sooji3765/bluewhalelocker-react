import React, { Component } from "react";
import BwlUtil from '../../utils/BwlUtil';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


class LoginComponent extends Component{

    constructor(props) {
        super(props);
        this.handleSignIn = this.handleSignIn.bind(this);
    }

    doSignIn = async (item) =>{
        const resUserLogin = await BwlUtil.doBwlPostData('/user/login', item);
        if (resUserLogin.success === true) {
            const id = '1';
            const resUser = await BwlUtil.doBwlGetData('/user/' + id, {});
            if (resUser.success === true) {
                // id email, name, password, reg_date, wallet, profile
                if (resUser.results.length === 1) {
                    return {
                        success: true,
                        auth: resUserLogin.results,
                        ...resUser.results[0],
                    }
                }
            }
        }

        return {};
    }

    handleSignIn = async (e) => {
        e.preventDefault();

        const form = BwlUtil.findParentForm(e.target);

        if (form) {
            const item = BwlUtil.getFormData(e, form);
            const res = await this.doSignIn(item);
            if (res.success === true) {
                this.props.handleSignIn({props: this.props, e, item: res});
            }
        } else {
            console.log('not found form tag');
        }
    };

    render(){
        return (
            <>
            <div className="page-content header-clear-medium">
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className="sign-page">
                    <Avatar className="sign-avatar" >
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography className="sign-title" component="h1" variant="h5">
                    Sign in
                    </Typography>
                    <form noValidate className="sign-form">
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        onClick={this.handleSignIn}
                        variant="contained"
                        color="primary"
                        style={{'margin-bottom' : '10px'}}>
                        Sign In
                    </Button>

                    <Grid container>
                        <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                        </Grid>
                        <Grid item>
                        <Link href="/signup" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            
            </Container>
            </div>
            </>
        );
    }
}

export default LoginComponent;