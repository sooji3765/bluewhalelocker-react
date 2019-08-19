import React from 'react';

import HeaderComponent from '../components/HeaderComponent';
import ReservationComponent from '../components/ReservationComponent';
import FooterComponent from '../components/FooterComponent';

const ReservationListPage = () => {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <ReservationComponent></ReservationComponent>
      <FooterComponent path="/reservationList"></FooterComponent>
    </>
  );
};

export default ReservationListPage;