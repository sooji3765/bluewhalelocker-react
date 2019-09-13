
// evanlimdev : 개발우선순위 3, 사용자가 localStorage, sessionStorage 를 Chrome F12 개발자 도구를 통해 어떤내용인지 알수 없도록, 암호화 및 난독화 필요 

class MyInfo {

  constructor(props) {
    console.log("constructor MyInfo");
  }

  initialState = {
    header: {
      count: "0",
      title: "BlueWhale Locker",
    },
    userInfo: {
      user_id: "",
      user_name: "",
    },
    routerInfo: {
      selectComponent: "LoginComponent",
      selectChanger: "user",
    },
    lockerInfo: {
      lockerList: [],
      lockerItem: null,
    },
  };

  setSignIn = (profile) => {
    const jsonProfile = JSON.stringify(profile);
    sessionStorage.setItem("bwlProfile", jsonProfile);
  }

  setSignUp = () => {
    sessionStorage.clear();
  }
  
  setSignOut = () => {
    sessionStorage.clear();
  }

  getSignStatus = () => {
    const profile = this.getProfile();
    if (profile && profile.isSignIn === true) {
      return profile;
    }

    return false;
  }

  getProfile = () => {
    try {
      const jsonProfile = sessionStorage.getItem("bwlProfile");
      const profile = JSON.parse(jsonProfile);
      return profile;
    } catch (e) {
      console.log(e);
    }

    return null;
  }

  //////////////////////////////////////////////////////////////////////////////
  // set/get remember me

  setRememberMe = (item) => {
    localStorage.setItem("rememberMe", JSON.stringify(item));
  }

  getRememberMe = (item) => {
    try {
      const jsonItem = localStorage.getItem("rememberMe");
      if (jsonItem) {
        const item = JSON.parse(jsonItem);
        return item;
      }
    } catch (e) {
      console.log(e);
    }

    return {
      email: "",
      checked: false,
    };
  }

}

let singletonInstance;

if (!singletonInstance) {
  singletonInstance = new MyInfo();
}

export default singletonInstance;
