import { connect } from "react-redux";
// import { logout } from "../../redux/actions/auth";
import {getMessages} from "../../redux/actions/newsFeed"
import {likeMessage} from "../../redux/actions/like"

const mapStateToProps = (state) => ({
    messages: state.newsFeed.messages
})

const mapDispatchToProps = {
getMessages,
likeMessage
};
// console.log (messages)
export const enhancer = connect(mapStateToProps, mapDispatchToProps);