import React from 'react'

import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import SignupComponent from '../components/SignupComponent';
const SignPage = () =>{

    return(
        <>
            <HeaderComponent ></HeaderComponent>
            <SignupComponent></SignupComponent>
            <FooterComponent></FooterComponent>
        </>
    );
};

export default SignPage;