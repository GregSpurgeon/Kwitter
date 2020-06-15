import { connect } from "react-redux";
import { logout } from "../../redux/actions/auth";
import { getUser} from "../../redux/actions/users"

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.isAuthenticated,
  username: state.users.username,
});

const mapDispatchToProps = {
  logout,
  getUser
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
