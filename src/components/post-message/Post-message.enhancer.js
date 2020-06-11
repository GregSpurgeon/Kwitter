import { connect } from "react-redux";
import { postMessageCall } from "../../redux/actions/post-message";

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => ({
text:state.postMsg.message
});

// https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = {
  postMessageCall,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);