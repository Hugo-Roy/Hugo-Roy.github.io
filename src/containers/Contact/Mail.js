import { connect } from 'react-redux';
import Mail from 'src/components/Contact/Mail';
import { updateInputMail } from '../../actions/mainActions';

const mapStateToProps = (state) => ({
  inputMail: state.inputMail,
});

const mapDispatchToProps = (dispatch) => ({
  setMail: (newMail) => {
    dispatch(updateInputMail(newMail));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Mail);
