import {
  CLEAR_INPUTS_ON_SUBMIT,
  UPDATE_INPUT_MAIL,
  UPDATE_INPUT_MESSAGE,
  UPDATE_INPUT_NAME,
} from '../actions/mainActions';

const initialState = {
  inputName: '',
  inputMail: '',
  inputMessage: '',
};

function mainReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_INPUT_NAME:
      return {
        ...state,
        inputName: action.inputName,
      };
    case UPDATE_INPUT_MAIL:
      return {
        ...state,
        inputMail: action.inputMail,
      };
    case UPDATE_INPUT_MESSAGE:
      return {
        ...state,
        inputMessage: action.inputMessage,
      };
    case CLEAR_INPUTS_ON_SUBMIT:
      return {
        ...state,
        inputName: '',
        inputMail: '',
        inputMessage: '',
      };
    default:
      return state;
  }
}

export default mainReducer;
