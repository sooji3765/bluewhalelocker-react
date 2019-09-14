import React ,{ Component } from 'react';
import BwlUtil from '../../utils/BwlUtil';
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
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
      }

    handleSignIn = async (e) => {
        e.preventDefault();
        this.props.handleUpdateState({props: this.props, e, selectComponent: 'LoginComponent'});
    }

    handleSignUp = async (e) => {
        e.preventDefault();

        const form = BwlUtil.findParentForm(e.target);

        if (form) {
            const item = BwlUtil.getFormData(e, form);
            const res = await BwlUtil.doBwlPostData('/user/join', item);
            if (res.success === true) {
                alert('회원가입이 완료되었습니다.')
                this.props.handleSignUp({props: this.props, e, item: res});
            } else {
                alert('회원가입 실패!');// evanlimdev : 개발우선순위 3, 모달박스로 표시 필요
            }
        } else {
            console.log('not found form tag');
        }
    };

    componentDidMount() {
        this.setState({
          ...this.props
        })
      }

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
                        name="name"
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
                        name="password-check"
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
                    <Link href="/login" variant="body2" onClick={this.handleSignIn}>
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