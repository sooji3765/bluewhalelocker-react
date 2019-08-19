import React from 'react';

import HeaderComponent from '../components/HeaderComponent';
import LikeComponent from '../components/LikeComponent';
import FooterComponent from '../components/FooterComponent';

const LikeListPage = () => {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <LikeComponent></LikeComponent>
      <FooterComponent path="/likeList"></FooterComponent>
    </>
  );
};

export default LikeListPage;