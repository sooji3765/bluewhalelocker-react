import React  from 'react'

import HeaderComponent from '../components/default/HeaderComponent';
import FooterComponent from '../components/default/FooterComponent';
import LoginComponent from '../components/user/LoginComponent';
const LoginPage = () =>{
    return(
        <>
            <HeaderComponent></HeaderComponent>
            <LoginComponent></LoginComponent>
            <FooterComponent></FooterComponent>
        </>
    );
};

export default LoginPage;