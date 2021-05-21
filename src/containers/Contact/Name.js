import { connect } from 'react-redux';
import Name from 'src/components/Contact/Name';
import { updateInputName } from '../../actions/mainActions';

const mapStateToProps = (state) => ({
  inputName: state.inputName,
});

const mapDispatchToProps = (dispatch) => ({
  setName: (newName) => {
    dispatch(updateInputName(newName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Name);
