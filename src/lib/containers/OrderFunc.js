
//////////////////////////////////////////////////////////////////////////////
// for Component
const handleOrderRegist = (data) => {
  data.props.ModuleActions.action_handleOrderRegist(data);
}

const handleOrderUpdate = (data) => {
  data.props.ModuleActions.action_handleOrderUpdate(data);
}

export default {
  handleOrderRegist,
  handleOrderUpdate,
}
