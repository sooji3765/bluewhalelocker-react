import React from 'react';

import HeaderComponent from '../components/default/HeaderComponent';
import ReservationComponent from '../components/keeper/ReservationComponent';
import FooterComponent from '../components/default/FooterComponent';

const ReservationListPage = () => {
  return (
    <>
      <HeaderComponent title={'RESERVATION LIST'}></HeaderComponent>
      <ReservationComponent></ReservationComponent>
      <FooterComponent path="/reservationList"></FooterComponent>
    </>
  );
};

export default ReservationListPage;