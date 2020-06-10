import { connect } from "react-redux";
import { otherUsers } from "../../redux/actions/otherUsers";

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => ({
users:state.Other.users
});

// https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = {
  otherUsers,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);