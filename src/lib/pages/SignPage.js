import React from 'react'

import HeaderComponent from '../components/default/HeaderComponent';
import FooterComponent from '../components/default/FooterComponent';
import SignupComponent from '../components/user/SignupComponent';
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