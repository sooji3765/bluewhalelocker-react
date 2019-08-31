import React from "react";

import HeaderComponent from "../components/default/HeaderComponent";
import FooterComponent from "../components/default/FooterComponent";
import ProfileEditComponent from "../components/user/ProfileEditComponent";
const ProfileEditPage = () => {
  return (
    <>
      <HeaderComponent />
      <ProfileEditComponent />
      <FooterComponent />
    </>
  );
};

export default ProfileEditPage;
