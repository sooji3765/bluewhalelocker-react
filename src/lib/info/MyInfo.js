import LocalTestInfo from './LocalTestInfo';

class MyInfo {

  constructor(props) {
    console.log("constructor MyInfo");
  }

  emptyInfo = {
    props: {
      isSignIn: false
    },
    state: {
      header: {
        count: "",
        title: "",
      }, 
      userInfo: {
        user_id: "",
        user_name: "",
      },
      routerInfo: {
        selectComponent: 'LoginComponent',
      },
      lockerInfo: {
        lockerList: [],
      },
    },
  };

  case1_Info = {
    props: {
      isSignIn: false
    },
    state: {
      header: {
        count: "",
        title: "",
      }, 
      userInfo: {
        user_id: "",
        user_name: "",
      },
      routerInfo: {
        selectComponent: 'AddLockerComponent',
      },
      lockerInfo: {
        lockerList: LocalTestInfo.lockerList,
      },
    }
  };

  getProfile = () => {
    const jsonProfile = window.sessionStorage.getItem("profile");
    const profile = this.emptyInfo;

    try {
      const s = JSON.parse(jsonProfile);
      if (s.props)
        profile.props = s.props;

      if (s.state)
        profile.state = s.state;

      profile.props.isSignIn = true;
    } catch (e) { }

    return profile;
  }

  setSignIn = () => {
    const profile = {
      state: {
        header: {
          count: "2",
          title: "locker - 제목",
        },
        userInfo: {
          user_id: "USER1",
          user_name: "김철순",
        },
        routerInfo: {
          selectComponent: 'HomeComponent',
        },
        lockerInfo: {
          lockerList: LocalTestInfo.lockerList,
        },
      }
    };

    const jsonProfile = JSON.stringify(profile);
    window.sessionStorage.setItem("profile", jsonProfile);
  }

  setSignUp = () => {
    window.sessionStorage.clear();
  }
  
  setSignOut = () => {
    window.sessionStorage.clear();
  }

}

let singletonInstance;

if (!singletonInstance) {
  singletonInstance = new MyInfo();
}

export default singletonInstance;
