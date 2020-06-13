import { connect } from "react-redux";
import { likeMessage } from "../../redux/actions/like";

const mapStateToProps = (state) => ({
  messageId: state.like.messageId
});

const mapDispatchToProps = {
  likeMessage,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);