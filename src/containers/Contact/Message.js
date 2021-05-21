import { connect } from 'react-redux';
import Message from 'src/components/Contact/Message';
import { updateInputMessage } from '../../actions/mainActions';

const mapStateToProps = (state) => ({
  inputMessage: state.inputMessage,
});

const mapDispatchToProps = (dispatch) => ({
  setMessage: (newMessage) => {
    dispatch(updateInputMessage(newMessage));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
