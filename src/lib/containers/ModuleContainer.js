import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as moduleStores from '../store/modules/ModuleStore';

// info
import MyInfo from '../info/MyInfo';

// func
import UserFunc from './UserFunc';
import DefaultFunc from './DefaultFunc';
import LockerFunc from './LockerFunc';
import ReviewFunc from './ReviewFunc';

// common : login
import HeaderLoginComponent from '../components/default/HeaderLoginComponent';
import FooterLoginComponent from '../components/default/FooterLoginComponent';

// common : user
import HeaderComponent from '../components/default/HeaderComponent';
import FooterComponent from '../components/default/FooterComponent';

// common : keeper
import HeaderKeeperComponent from '../components/default/HeaderKeeperComponent';
import FooterKeeperComponent from '../components/default/FooterKeeperComponent';

// user
import LoginComponent from '../components/user/LoginComponent';
import SignupComponent from '../components/user/SignupComponent';
import ProfileEditComponent from '../components/user/ProfileEditComponent';
import UsersettingComponent from '../components/user/UsersettingComponent';

// wallet
import WalletComponent from '../components/wallet/WalletComponent';

// default
import MapComponent from '../components/map/MapComponent';
import PageMainComponent from '../components/default/PageMainComponent';
import MenuSettingComponent from '../components/keeper/MenuSettingComponent';
import ReservationComponent from '../components/keeper/ReservationComponent';
import ChatComponent from '../components/chat/ChatComponent';

// locker
import AddLockerComponent from '../components/locker/AddLockerComponent';
import InputLockerComponent from '../components/locker/InputLockerComponent';
import LockerItemComponent from '../components/locker/LockerItemComponent';
import LockerReservationComponent from '../components/locker/LockerReservationComponent';

// keeper
import KeeperSettingComponent from '../components/keeper/KeeperSettingComponent';
import RegisterKeeperComponent from '../components/keeper/RegisterKeeperComponent';

// review
import ReviewRegistComponent from '../components/review/ReviewRegistComponent';

class ModuleContainer extends Component {
 
  componentDidMount() {
    this.setState({
      ...this.props,
      ...UserFunc,
      ...DefaultFunc,
      ...LockerFunc,
      ...ReviewFunc,
    })
  }

  componentWillUpdate(nextProps, nextState) {
    const profile = MyInfo.getSignStatus();
    if (profile) {
      if (!nextProps.isSignIn) {
        nextState.handleSignIn({props: nextState, profile : profile});
      }
    }
  }

  render () {
    if (!this.state) {
        return (
        <>
        </>
      )
    }

    const { selectComponent, selectChanger } = this.props.routerInfo;
    const { isSignIn } = this.props;

    console.log('nav', selectComponent, selectChanger);
    return (
      <>
        {!isSignIn && <>
        <HeaderLoginComponent {...this.state} {...this.props}></HeaderLoginComponent>
        <FooterLoginComponent {...this.state} {...this.props}></FooterLoginComponent>
        </>}

        {isSignIn && <>
        {/* common : user */}
        {selectChanger === 'user' && <>
        <HeaderComponent {...this.state} {...this.props}></HeaderComponent>
        <FooterComponent {...this.state} {...this.props}></FooterComponent>
        </>}
        {/* common : keeper */}
        {selectChanger === 'keeper' && <>
        <HeaderKeeperComponent {...this.state} {...this.props}></HeaderKeeperComponent>
        <FooterKeeperComponent {...this.state} {...this.props}></FooterKeeperComponent>
        </>}
        </>}
        {/* user */}
        {selectComponent === 'LoginComponent' && <LoginComponent {...this.state} {...this.props}/>}
        {selectComponent === 'ProfileEditComponent' && <ProfileEditComponent {...this.state} {...this.props}/>}
        {selectComponent === 'SignupComponent' && <SignupComponent {...this.state} {...this.props}/>}
        {selectComponent === 'UsersettingComponent' && <UsersettingComponent {...this.state} {...this.props}/>}
        {/* wallet */}
        {selectComponent === 'WalletComponent' && <WalletComponent {...this.state} {...this.props}/>}
        {/* default */}
        {selectComponent === 'HomeComponent' && <>
          <MapComponent {...this.state} {...this.props}/>
          <PageMainComponent {...this.state} {...this.props}/>
          <MenuSettingComponent {...this.state} {...this.props}/>
        </>}
        {selectComponent === 'ReservationComponent' && <ReservationComponent {...this.state} {...this.props} />}
        {selectComponent === 'ChatComponent' && <ChatComponent {...this.state} {...this.props} />}
        {/* locker */}
        {selectComponent === 'AddLockerComponent' && <AddLockerComponent {...this.state} {...this.props} />}
        {selectComponent === 'InputLockerComponent' && <InputLockerComponent {...this.state} {...this.props} />}
        {selectComponent === 'LockerItemComponent' && <LockerItemComponent {...this.state} {...this.props} />}
        {selectComponent === 'LockerReservationComponent' && <LockerReservationComponent {...this.state} {...this.props} />}
        {/* keeper */}
        {selectComponent === 'KeeperSettingComponent' && <KeeperSettingComponent {...this.state} {...this.props} />}
        {selectComponent === 'RegisterKeeperComponent' && <RegisterKeeperComponent {...this.state} {...this.props} />}
        {/* reviews */}
        {selectComponent === 'ReviewRegistComponent' && <ReviewRegistComponent {...this.state} {...this.props} />}
      </>
    )
  }
}

const mapStateToProps = ({ ModuleStore }) => {
  return ({
    ...ModuleStore,
  })
};

const mapDispatchToProps = (dispatch) => ({
  ModuleActions: bindActionCreators(moduleStores, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModuleContainer);
