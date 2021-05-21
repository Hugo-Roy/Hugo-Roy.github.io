/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';

import Contact from 'src/components/Contact';
import { clearInputsOnSubmit } from 'src/actions/mainActions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  clearForm: () => {
    dispatch(clearInputsOnSubmit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
