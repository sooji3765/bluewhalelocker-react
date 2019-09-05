
//////////////////////////////////////////////////////////////////////////////
// for AddLockerComponent
const handleLockerItem = (data) => {
  data.props.ModuleActions.action_handleLockerItem(data);
}

//////////////////////////////////////////////////////////////////////////////
// for InputLockerComponent
const handleRegisterLocker = (data) => {
  data.props.ModuleActions.action_handleRegisterLocker(data);
}

//////////////////////////////////////////////////////////////////////////////
// for LockerItemComponent
const handleUpdateLocker = (data) => {
  data.props.ModuleActions.action_handleRouterAddLocker(data);
}

const handleDeleteLocker = (data) => {
  data.props.ModuleActions.action_handleDeleteLocker(data);
}

//////////////////////////////////////////////////////////////////////////////
// for LockerReservationComponent
const handleReservationLocker = (data) => {
  data.props.ModuleActions.action_handleReservationLocker(data);
}

const handlePayLocker = (data) => {
  data.props.ModuleActions.action_handlePayLocker(data);
}

export default {
  handleLockerItem,
  handleRegisterLocker,
  handleUpdateLocker,
  handleDeleteLocker,
  handleReservationLocker,
  handlePayLocker,
}
