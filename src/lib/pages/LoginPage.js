import React  from 'react'

import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import LoginComponent from '../components/LoginComponent';
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