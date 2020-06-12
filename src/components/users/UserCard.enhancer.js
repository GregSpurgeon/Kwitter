import { connect } from "react-redux";
import { getUser } from "../../redux/actions/users";

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => ({ 
    username: state.users.username,
    displayName: state.users.displayName,
    about: state.users.about,
    pictureLocation: state.users.pictureLocation,
});
const mapDispatchToProps = {
    getUser,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);