import React from "react";

import HeaderComponent from "../components/default/HeaderComponent";
import LockerReservationComponent from "../components/locker/LockerReservationComponent";
import FooterComponent from "../components/default/FooterComponent";

const LockerReservationPage = () => {
  return (
    <>
      <HeaderComponent />
      <LockerReservationComponent />
      <FooterComponent />
    </>
  );
};

export default LockerReservationPage;
