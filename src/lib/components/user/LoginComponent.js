import React, { Component } from "react";
import BwlUtil from '../../utils/BwlUtil';
import MyInfo from '../../info/MyInfo';
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

    state = {
        rememberMe: {
            email: "",
            checked: false,
        }
    };

    constructor(props) {
        super(props);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleForgotPassword = this.handleForgotPassword.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeCheck = this.handleChangeCheck.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    componentWillMount() {
        const rememberMe = MyInfo.getRememberMe();

        this.setState({
            ...this.state,
            rememberMe: {
                ...this.state.rememberMe,
                ...rememberMe,
                email: rememberMe.checked ? rememberMe.email : '',
            }
        })        
    }

    doSignIn = async (item) => {
        const resUserLogin = await BwlUtil.doBwlPostData('/user/login', item);
        const token = resUserLogin.results;
        if (resUserLogin.success === true) {
            const resUserLogin = await BwlUtil.doBwlGetData('/user/authcheck?token=' + token);
            return {
                success: true,
                token: token,
                ...resUserLogin,
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
            } else {
                alert('로그인 실패!');// evanlimdev : 개발우선순위 3, 모달박스로 표시 필요
            }
        } else {
            console.log('not found form tag');
        }
    };

    handleSignUp = async (e) => {
        e.preventDefault();
        this.props.handleUpdateState({props: this.props, e, selectComponent: 'SignupComponent'});
    }

    handleForgotPassword = async (e) => {
        e.preventDefault();

        // evanlimdev : 개발우선순위 4, 비밀번호 잊어버림
    }

    handleChangeEmail = (e) => {

        const newState = {
            ...this.state,
            rememberMe: {
                ...this.state.rememberMe,
                email: e.target.value,
            }
        }

        MyInfo.setRememberMe({
            ...newState.rememberMe,
        })

        this.setState({
            ...newState
        })
    }

    handleChangeCheck = (e) => {

        const newState = {
            ...this.state,
            rememberMe: {
                ...this.state.rememberMe,
                checked: e.target.checked,
            }
        }

        MyInfo.setRememberMe({
            ...newState.rememberMe,
        })

        this.setState({
            ...newState
        })
    }

    render() {
        
        let { email, checked } = this.state.rememberMe;

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
                        value={email}
                        onChange={(e) => this.handleChangeEmail(e)}
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
                        control={<Checkbox value="remember" color="primary" 
                            checked={checked}
                            onChange={(e) => this.handleChangeCheck(e)}
                        />}
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
                        {/* <Link href="#" variant="body2" onClick={(e) => this.handleForgotPassword(e)}>
                            Forgot password?
                        </Link> */}
                        </Grid>
                        <Grid item>
                        <Link href="/signup" variant="body2" onClick={(e) => this.handleSignUp(e)}>
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