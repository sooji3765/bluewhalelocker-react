import React from 'react';

import HeaderComponent from '../components/default/HeaderComponent';
import LikeComponent from '../components/LikeComponent';
import FooterComponent from '../components/default/FooterComponent';

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